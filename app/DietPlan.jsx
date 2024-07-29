import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert, Image, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { StyledTitle } from '../styles';
import { useGlobalContext } from '../context/GlobalProvider';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function DietPlan() {
    const [isFocus3, setIsFocus3] = useState(false);
    const [value3, setValue3] = useState();
    const [mealPlan, setMealPlan] = useState([]);
    const [loading, setLoading] = useState(false);

    const { selected, userCalories, user } = useGlobalContext();
    const DietCalories = userCalories.Calories / 3;
    const userId = user.$id;

    useEffect(() => {
        const fetchMealPlan = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://api.spoonacular.com/mealplanner/generate', {
                    params: {
                        apiKey: 'your api key of spoonacular',
                        timeFrame: 'week',
                        targetCalories: DietCalories,
                        diet: value3,
                    },
                });
                setMealPlan(response.data.week);
                await AsyncStorage.setItem(`mealPlan_${userId}`, JSON.stringify(response.data.week));
            } catch (error) {
                console.error('Error fetching meal plan:', error);
                Alert.alert('Error', 'Failed to fetch meal plan.');
            } finally {
                setLoading(false);
            }
        };

        const loadMealPlan = async () => {
            const storedMealPlan = await AsyncStorage.getItem(`mealPlan_${userId}`);
            if (storedMealPlan) {
                setMealPlan(JSON.parse(storedMealPlan));
            }
        };

        if (value3) {
            fetchMealPlan();
        } else {
            loadMealPlan();
        }
    }, [value3, userCalories, userId]);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="aqua" />
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <StyledTitle title={'Weekly Meal Plan'} textAlign={'left'} />
                <Dropdown
                    style={[styles.dropdown, isFocus3 && { borderColor: '#00ADB5' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    itemTextStyle={styles.itemsStyle}
                    data={[
                        { label: 'Gluten Free', value: 'gluten free' },
                        { label: 'Ketogenic', value: 'ketogenic' },
                        { label: 'Vegetarian', value: 'vegetarian' },
                        { label: 'Lacto-Vegetarian', value: 'lacto-vegetarian' },
                        { label: 'Ovo-Vegetarian', value: 'ovo-vegetarian' },
                        { label: 'Vegan', value: 'vegan' },
                        { label: 'Pescetarian', value: 'pescetarian' },
                        { label: 'Paleo', value: 'paleo' },
                        { label: 'Primal', value: 'primal' },
                        { label: 'Low FODMAP', value: 'low fodmap' },
                        { label: 'Whole30', value: 'whole30' },
                    ]}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus3 && !value3 ? "Enter your preferred Diet" : ""}
                    value={value3}
                    onFocus={() => setIsFocus3(true)}
                    onBlur={() => setIsFocus3(false)}
                    onChange={item => {
                        setValue3(item.value);
                        setIsFocus3(false);
                    }}
                />
                {Object.keys(mealPlan).length > 0 ? Object.entries(mealPlan).map(([day, { meals, nutrients }], index) => (
                    <View key={index} style={styles.dayContainer}>
                        <Text style={styles.dayTitle}>Day {index + 1} - {day.charAt(0).toUpperCase() + day.slice(1)}</Text>
                        {meals.map((meal, mealIndex) => (
                            <View key={mealIndex} style={styles.mealContainer}>
                                <Image source={{
                                    uri: `https://spoonacular.com/recipeImages/${meal.id}-480x360.${meal.imageType}`
                                }} style={styles.image} resizeMode="cover" />
                                <Text style={styles.mealTitle}>{meal.title}</Text>
                                <View style={styles.mealDetailContainer}>
                                    <Text style={styles.bullet}>• <Text style={styles.mealDetailText}>Ready in {meal.readyInMinutes} minutes</Text></Text>
                                    <Text style={styles.bullet}>• <Text style={styles.mealDetailText}>Servings: {meal.servings}</Text></Text>
                                </View>
                                <View style={styles.nutrientsContainer}>
                                    <Text style={styles.nutrientsTitle}>Nutrients</Text>
                                    <View style={styles.mealDetailContainer}>
                                        <Text style={styles.bullet}>• <Text style={styles.nutrient}>Calories: {nutrients.calories}</Text></Text>
                                        <Text style={styles.bullet}>• <Text style={styles.nutrient}>Protein: {nutrients.protein}</Text></Text>
                                        <Text style={styles.bullet}>• <Text style={styles.nutrient}>Carbohydrates: {nutrients.carbohydrates}</Text></Text>
                                        <Text style={styles.bullet}>• <Text style={styles.nutrient}>Fat: {nutrients.fat}</Text></Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                )) : <Text style={{ color: 'white', fontSize: 16 }}>No meal plan available...</Text>}
            </View>
        </ScrollView>
    );
}

export default DietPlan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#1F2544',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
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
    dayContainer: {
        marginBottom: 20,
    },
    dayTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        color: 'white',
    },
    mealContainer: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'aqua',
        borderRadius: 5,
        backgroundColor: '#393E46',
        justifyContent: 'center',
        width: 300
    },
    mealTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        margin: 5,
    },
    mealDetailContainer: {
        margin: 10,
    },
    bullet: {
        fontSize: 16,
        marginVertical: 2,
        color: 'aqua'
    },
    mealDetailText: {
        color: 'white',
    },
    image: {
        width: '100%',
        height: 300
    },
    nutrientsContainer: {
        borderWidth: 1,
        borderColor: 'aqua',
        borderRadius: 5,
        backgroundColor: 'black',
    },
    nutrientsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
        color: 'white'
    },
    nutrient: {
        color: 'white',
    },
});
