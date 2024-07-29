import React, { useState } from 'react';
import { StyleSheet, Alert,ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import { useGlobalContext } from '../../context/GlobalProvider';
import { RoundedButton, StyledTitle, StyledView, Input } from '../../styles';
import DropdownComponent from '../../components/DropDownComponent/dropdown-component';
import Radio from '../../components/radio-group';
import { Dropdown } from 'react-native-element-dropdown';
import { createCalories } from "../../lib/appwrite";

function CalorieCalculator() {
    const [isFocus2, setIsFocus2] = useState(false);
    const { value, value2, setValue2, age, setAge, selectedId, Bmi, setUserCalories } = useGlobalContext();
    const [isSubmitting, setSubmitting] = useState(false);


    const handleSubmit = async () => {
        if (!age || !value || !value2 || !selectedId) {
            Alert.alert("Error", "Please fill in all fields");
            return;
        }

        const numericAge = parseFloat(age);
        const heightInCm = Bmi.height * 100; 

        if (isNaN(numericAge)) {
            Alert.alert("Error", "Please enter valid numbers");
            return;
        }

        let calculatedBmr;
        if (selectedId === "Male") {
            calculatedBmr = 66.5 + (13.75 * Bmi.weight) + (5.003 * heightInCm) - (6.75 * numericAge);
        } else if (selectedId === "Female") {
            calculatedBmr = 655.1 + (9.563 * Bmi.weight) + (1.850 * heightInCm) - (4.676 * numericAge);
        } else {
            Alert.alert("Error", "Invalid gender selected");
            return;
        }

        calculatedBmr = Math.min(3000, Math.max(0, Math.round(calculatedBmr)));

        let maintainenceCal;
        if (value === "Not Active") {
            maintainenceCal = calculatedBmr * 1.2;
        } else if (value === "Lightly Active") {
            maintainenceCal = calculatedBmr * 1.375;
        } else if (value === "Moderately Active") {
            maintainenceCal = calculatedBmr * 1.55;
        } else if (value === "Very Active") {
            maintainenceCal = calculatedBmr * 1.725;
        } else if (value === "Extremely Active") {
            maintainenceCal = calculatedBmr * 1.9;
        }

        maintainenceCal = Math.min(3000, Math.max(0, Math.round(maintainenceCal)));

        let cal;
        if (value2 === 'Loose Weight') {
            cal = maintainenceCal - 500;
        } else if (value2 === 'Maintain Weight') {
            cal = maintainenceCal;
        } else if (value2 === 'Gain Weight') {
            cal = maintainenceCal + 500;
        }

        cal = Math.min(3000, Math.max(0, Math.round(cal)));

        const documentId = Bmi.$id;
        setSubmitting(true);
        try {
            const calorieData = await createCalories(documentId, numericAge, value, value2, selectedId, calculatedBmr, maintainenceCal, cal);
            Alert.alert('Success', `Calories Detected`);
            setUserCalories(calorieData)
            router.replace('/home');
        } catch (error) {
            Alert.alert("Error", error.message);
        }finally {
            setSubmitting(false);
        }
    };

    return (
        <StyledView>

            <StyledTitle title="Calorie Calculator" />
            <StyledTitle fontSize={"16px"} title="Let's calculate the best calorie intake for you" />
            <Input keyboardType="numeric" placeholder="Enter your age" onChangeText={setAge} />

            <DropdownComponent />

            <Dropdown
                style={[styles.dropdown, isFocus2 && { borderColor: '#00ADB5' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                itemTextStyle={styles.itemsStyle}
                data={[
                    { label: 'Loose Weight', value: 'Loose Weight' },
                    { label: 'Maintain Weight', value: 'Maintain Weight' },
                    { label: 'Gain Weight', value: 'Gain Weight' },
                ]}
                labelField="label"
                valueField="value"
                placeholder={!isFocus2 && !value2 ? "Enter Weight Goal" : ""}
                value={value2}
                onFocus={() => setIsFocus2(true)}
                onBlur={() => setIsFocus2(false)}
                onChange={item => {
                    setValue2(item.value);
                    setIsFocus2(false);
                }}
            />

            <Radio />


            {isSubmitting ? (
                <ActivityIndicator size="large" color="aqua" />
            ) : (
                <RoundedButton title="Calculate" onPress={handleSubmit} />
        )}
            
        </StyledView>
    );
}

export default CalorieCalculator;

const styles = StyleSheet.create({
    dropdown: {
        marginVertical: 15,
        height: 50,
        width: 300,
        borderBottomColor: 'white',
        borderBottomWidth: 0.5,
    },
    placeholderStyle: {
        fontSize: 20,
        color: '#00ADB5',
    },
    selectedTextStyle: {
        fontSize: 20,
        color: '#00ADB5',
    },
    itemsStyle: {
        fontSize: 16,
        color: 'black',
    },
});
