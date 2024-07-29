import React, { useState } from 'react'
import { StyleSheet, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { RoundedButton, StyledTitle, StyledView, Input } from '../styles';
import DropdownComponent from '../components/DropDownComponent/dropdown-component';
import Radio from '../components/radio-group';
import { Dropdown } from 'react-native-element-dropdown';
import { useGlobalContext } from '../context/GlobalProvider';
import { UpdateCalorieDimensions } from '../lib/appwrite';

function EditCalories() {
    const [isFocus2, setIsFocus2] = useState(false);
    const { value, value2, setValue2, age, setAge, selectedId, Bmi, userCalories, setUserCalories } = useGlobalContext();

    const handleUpdate = async () => {
        if (!age && !value && !value2 && !selectedId) {
            Alert.alert("Error", "Please fill in at least one field");
            return;
        }

        const numericAge = age ? parseFloat(age) : userCalories.age;
        const activityLevel = value || userCalories.activityLevel;
        const goal = value2 || userCalories.goal;
        const gender = selectedId || userCalories.gender;
        const heightInCm = Bmi.height * 100;

        if (isNaN(numericAge)) {
            Alert.alert("Error", "Please enter valid numbers");
            return;
        }

        let calculatedBmr;
        if (gender === "Male") {
            calculatedBmr = 66.5 + (13.75 * Bmi.weight) + (5.003 * heightInCm) - (6.75 * numericAge);
        } else if (gender === "Female") {
            calculatedBmr = 655.1 + (9.563 * Bmi.weight) + (1.850 * heightInCm) - (4.676 * numericAge);
        } else {
            Alert.alert("Error", "Invalid gender selected");
            return;
        }
        
        calculatedBmr = Math.min(3000, Math.max(0, Math.round(calculatedBmr)));

        let maintainenceCal;
        switch (activityLevel) {
            case "Not Active":
                maintainenceCal = calculatedBmr * 1.2;
                break;
            case "Lightly Active":
                maintainenceCal = calculatedBmr * 1.375;
                break;
            case "Moderately Active":
                maintainenceCal = calculatedBmr * 1.55;
                break;
            case "Very Active":
                maintainenceCal = calculatedBmr * 1.725;
                break;
            case "Extremely Active":
                maintainenceCal = calculatedBmr * 1.9;
                break;
            default:
                maintainenceCal = calculatedBmr;
        }

        maintainenceCal = Math.min(3000, Math.max(0, Math.round(maintainenceCal)));

        let cal;
        switch (goal) {
            case 'Loose Weight':
                cal = maintainenceCal - 500;
                break;
            case 'Maintain Weight':
                cal = maintainenceCal;
                break;
            case 'Gain Weight':
                cal = maintainenceCal + 500;
                break;
            default:
                cal = maintainenceCal;
        }

        cal = Math.min(3000, Math.max(0, Math.round(cal)));

        const documentId = userCalories.$id;

        try {
            const calorieData = await UpdateCalorieDimensions(documentId, numericAge, activityLevel, goal, gender, calculatedBmr, maintainenceCal, cal);
            Alert.alert('Success', `Calorie Dimensions Updated`);
            setUserCalories(calorieData);
            router.replace('/home');
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };


    return (
        <>
            <Ionicons
                onPress={() => router.replace('/Edit')}
                style={styles.backIcon}
                name="arrow-back-outline"
                size={24}
                color="aqua"
            />
            <StyledView>

                <StyledTitle title="Let's update your Calorie Dimensions" fontSize={'20px'} />
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
                <RoundedButton title="Update" onPress={handleUpdate} />
            </StyledView>
        </>
    )
}



const styles = StyleSheet.create({
    backIcon: {
        position: 'absolute',
        top: 10,
        left: 10,
        borderRadius: 8,
        padding: 3,
        zIndex: 1
    }, dropdown: {
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

export default EditCalories
