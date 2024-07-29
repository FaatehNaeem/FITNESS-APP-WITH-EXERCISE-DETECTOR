import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { RoundedButton, StyledTitle } from '../../styles';

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
    const [bmi, setBmi] = useState(null);
    const [status, setStatus] = useState('');
    const [statusColor, setStatusColor] = useState('white');

    const calculateBMI = () => {
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

        const heightInMeters = (feetValue * 0.3048) + (inchesValue * 0.0254);
        const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(1));
        determineStatus(bmiValue);
    };

    const determineStatus = (bmiValue) => {
        let bmiCategory;
        let color;
        if (bmiValue < 18.5) {
            bmiCategory = 'Underweight';
            color = '#f0e68c'; // Light Yellow
        } else if (bmiValue >= 18.5 && bmiValue <= 25.0) {
            bmiCategory = 'Normal';
            color = '#7cfc00'; // Green
        } else if (bmiValue >= 25 && bmiValue <= 30.0) {
            bmiCategory = 'Overweight';
            color = '#ffa500'; // Orange
        } else if (bmiValue >= 30) {
            bmiCategory = 'Obese';
            color = '#ff4500'; // Red
        }
        setStatus(bmiCategory);
        setStatusColor(color);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StyledTitle title={"BMI Calculator"} top={'-20px'} />
            <TextInput
                style={styles.input}
                placeholder="Weight (kg)"
                keyboardType="numeric"
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
            <RoundedButton onPress={calculateBMI} title='Calculate' />
            {bmi && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>BMI: {bmi}</Text>
                    <Text style={[styles.resultText, { color: statusColor }]}>{`Status: ${status}`}</Text>
                </View>
            )}
            <View style={styles.bmiBarContainer}>
                <View style={[styles.bmiBarSegment, { backgroundColor: '#f0e68c' }]} />
                <View style={[styles.bmiBarSegment, { backgroundColor: '#7cfc00' }]} />
                <View style={[styles.bmiBarSegment, { backgroundColor: '#ffa500' }]} />
                <View style={[styles.bmiBarSegment, { backgroundColor: '#ff4500' }]} />
            </View>
            <View style={styles.bmiLabelsContainer}>
                <View style={styles.bmiLabelContainer}>
                    <StyledTitle title={'Underweight'} fontSize={'12px'} />
                    <StyledTitle title={' < 18.5'} fontSize={'12px'} color={'aqua'} />
                </View>
                <View style={styles.bmiLabelContainer}>
                    <StyledTitle title={'Normal'} fontSize={'12px'} />
                    <StyledTitle title={'18.5 - 25.0'} fontSize={'12px'} color={'aqua'} />
                </View>
                <View style={styles.bmiLabelContainer}>
                    <StyledTitle title={'Overweight'} fontSize={'12px'} />
                    <StyledTitle title={'25 - 30.0'} fontSize={'12px'} color={'aqua'} />
                </View>
                <View style={styles.bmiLabelContainer}>
                    <StyledTitle title={'Obese'} fontSize={'12px'} />
                    <StyledTitle title={' > 30'} fontSize={'12px'} color={'aqua'} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#1F2544',
    },
    input: {
        width: 300,
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
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
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    resultContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    resultText: {
        fontSize: 18,
        color: 'aqua',
    },
    bmiBarContainer: {
        flexDirection: 'row',
        marginTop: 30,
        width: 300,
        height: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    bmiBarSegment: {
        flex: 1,
    },
    bmiLabelsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 10,
    },
    bmiLabelContainer: {
        alignItems: 'center',
    },
});

export default BMICalculator;
