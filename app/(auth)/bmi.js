import { useState } from 'react';
import { RoundedButton, StyledTitle, StyledView, Input } from '../../styles';
import { Alert, StyleSheet, View, TextInput, ActivityIndicator } from 'react-native';
import { createBmi } from '../../lib/appwrite';
import { useGlobalContext } from "../../context/GlobalProvider";
import { router } from 'expo-router';

function BmiCalculator() {
  const [weight, setWeight] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const { user, setBmi } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);


  const convertHeightToMeters = (feet, inches) => {
    return (parseFloat(feet) * 0.3048) + (parseFloat(inches) * 0.0254);
  };

  const calculateBmi = (weight, heightInMeters) => {
    return weight / (heightInMeters * heightInMeters);
  };

  const handleBmi = async () => {
    if (!weight || !feet || !inches) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    const numericWeight = parseFloat(weight);
    const numericFeet = parseFloat(feet);
    const numericInches = parseFloat(inches);

    if (isNaN(numericWeight) || isNaN(numericFeet) || isNaN(numericInches)) {
      Alert.alert("Error", "Please enter valid numbers");
      return;
    }

    // Check for feet and inches
    if (numericFeet === 0) {
      Alert.alert("Error", "Feet cannot be 0. Please enter a valid height.");
      return;
    }

    if (numericInches > 11) {
      Alert.alert("Error", "Inches cannot be greater than 11. Please enter a valid height.");
      return;
    }

    const heightInMeters = convertHeightToMeters(numericFeet, numericInches);
    const bmiValue = calculateBmi(numericWeight, heightInMeters);
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

    const documentId = user.$id;
    setSubmitting(true);
    try {
      const bodymass = await createBmi(documentId, numericWeight, heightInMeters, bmiCategory);
      console.log(bodymass);
      Alert.alert('Success', `BMI created`);
      setBmi(bodymass);
      router.replace("/calorie-calculator");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <StyledView>
      <StyledTitle title="Bmi | Calculator"></StyledTitle>
      <StyledTitle fontSize={"16px"} title="Let's calculate your body type with Fit Flow"></StyledTitle>
      <Input
        keyboardType="numeric"
        placeholder="Enter your weight (kg)"
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

      {isSubmitting ? (
        <ActivityIndicator size="large" color="aqua" />
      ) : (
        <RoundedButton title="Calculate" onPress={handleBmi} />
      )}
      
    </StyledView>
  );
}

const styles = StyleSheet.create({
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
  },
})

export default BmiCalculator;
