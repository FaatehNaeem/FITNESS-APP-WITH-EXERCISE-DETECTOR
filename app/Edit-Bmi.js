import React, { useState } from 'react';
import { StyleSheet, Alert, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { RoundedButton, StyledTitle, StyledView, Input } from '../styles';
import { useGlobalContext } from '../context/GlobalProvider';
import { UpdateBmiDimensions, UpdateCalorieDimensionsBasedOnBmi } from '../lib/appwrite';

function EditBmi() {
    const { setBmi, Bmi, userCalories, setUserCalories } = useGlobalContext();
    const [weight, setWeight] = useState('');
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');

    const convertHeightToMeters = (feet, inches) => {
        return (parseFloat(feet) * 0.3048) + (parseFloat(inches) * 0.0254);
    };

    const calculateBmi = (weight, heightInMeters) => {
        return weight / (heightInMeters * heightInMeters);
    };

    const handleUpdate = async () => {
        if (!weight && !feet && !inches) {
            Alert.alert("Please fill in at least one field");
            return;
        }

        const numericWeight = weight ? parseFloat(weight) : Bmi.weight;

        const feetValue = parseInt(feet, 10);
        const inchesValue = parseInt(inches, 10);

        if (feetValue === 0) {
            Alert.alert("Error", "Feet cannot be 0. Please enter a valid height.");
            return;
        }

        if (inchesValue > 11) {
            Alert.alert("Error", "Inches cannot be greater than 11. Please enter a valid height.");
            return;
        }

        let numericHeightInMeters;
        if (feet && inches) {
            const heightInMeters = convertHeightToMeters(feet, inches);
            numericHeightInMeters = heightInMeters;
        } else if (feet || inches) {
            Alert.alert("Error", "Please enter both feet and inches.");
            return;
        } else {
            numericHeightInMeters = Bmi.height; // Existing height in meters
        }

        if (isNaN(numericWeight) || isNaN(numericHeightInMeters)) {
            Alert.alert("Error", "Please enter valid numbers");
            return;
        }

        const bmiValue = calculateBmi(numericWeight, numericHeightInMeters);
        let bmiCategory = '';
        if (bmiValue < 18.5) {
            bmiCategory = 'Underweight';
        } else if (bmiValue >= 18.5 && bmiValue <= 25.0) {
            bmiCategory = 'Normal';
        } else if (bmiValue >= 25 && bmiValue <= 30.0) {
            bmiCategory = 'Overweight';
        } else if (bmiValue >= 30) {
            bmiCategory = 'Obese';
        }

        const documentId = Bmi.$id;
        try {
            const UpdatedBodyMass = await UpdateBmiDimensions(documentId, numericWeight, numericHeightInMeters, bmiCategory);
            setBmi(UpdatedBodyMass);
            Alert.alert('Success', `BMI Dimensions updated`);

            // Calories logic
            const numericAge = userCalories.age;
            const activityLevel = userCalories.activityLevel;
            const goal = userCalories.goal;
            const gender = userCalories.Gender;
            const heightInCm = numericHeightInMeters * 100;

            if (!gender || (gender !== "Male" && gender !== "Female")) {
                Alert.alert("Error", "Invalid gender selected");
                return;
            }

            let calculatedBmr;
            if (gender === "Male") {
                calculatedBmr = 66.5 + (13.75 * numericWeight) + (5.003 * heightInCm) - (6.75 * numericAge);
            } else if (gender === "Female") {
                calculatedBmr = 655.1 + (9.563 * numericWeight) + (1.850 * heightInCm) - (4.676 * numericAge);
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

            const CalorieId = userCalories.$id;

            try {
                const calorieData = await UpdateCalorieDimensionsBasedOnBmi(CalorieId, calculatedBmr, maintainenceCal, cal);
                Alert.alert('Success', `Calorie Dimensions Updated based on BMI`);
                setUserCalories(calorieData);
                router.replace('/home');
            } catch (error) {
                Alert.alert("Error", error.message);
            }
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
                <StyledTitle title="Let's update your Bmi Dimensions" fontSize={"20px"} />

                <Input
                    keyboardType="numeric"
                    placeholder="Enter your weight kg"
                    value={weight}
                    onChangeText={setWeight}
                />
                <View style={styles.heightContainer}>
                    <TextInput
                        style={styles.inputHeight}
                        placeholder="Feet"
                        keyboardType="numeric"
                        value={feet}
                        onChangeText={setFeet}
                    />
                    <TextInput
                        style={styles.inputHeight}
                        placeholder="Inches"
                        keyboardType="numeric"
                        value={inches}
                        onChangeText={setInches}
                    />
                </View>

                <RoundedButton title="Update" onPress={handleUpdate} />
            </StyledView>
        </>
    );
}

const styles = StyleSheet.create({
    backIcon: {
        position: 'absolute',
        top: 10,
        left: 10,
        borderRadius: 8,
        padding: 3,
        zIndex: 1
    },
    heightContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    inputHeight: {
        width: '48%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
        marginTop: 10,
        marginBottom: 0,
        backgroundColor: '#EEEEEE',
    }
});

export default EditBmi;
