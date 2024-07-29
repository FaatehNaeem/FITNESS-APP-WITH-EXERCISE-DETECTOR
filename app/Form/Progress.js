import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useGlobalContext } from '../../context/GlobalProvider';

function Progress() {
    const { formData, user } = useGlobalContext();

    const formatDataByDay = (data) => {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const filteredData = data.filter(item => item.userId === user.$id);
        const formattedData = daysOfWeek.map(day => ({
            day,
            exercises: filteredData.filter(item => {
                const exerciseDate = new Date(item.date);
                return exerciseDate.getDay() === daysOfWeek.indexOf(day);
            })
        }));
        return formattedData;
    };

    const weeklyData = formatDataByDay(formData);

    return (
        <>
            <Ionicons
                onPress={() => router.replace('/form')}
                style={styles.backIcon}
                name="arrow-back-outline"
                size={24}
                color="aqua"
            />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {weeklyData.map((dayData, index) => (
                    <View key={index} style={styles.dayContainer}>
                        <Text style={styles.dayText}>{dayData.day}</Text>
                        {dayData.exercises.length > 0 ? (
                            dayData.exercises.map((exercise, exerciseIndex) => (
                                <View key={exerciseIndex} style={styles.exerciseContainer}>
                                    <Text style={styles.timeText}>{new Date(exercise.date).toLocaleTimeString()}</Text>
                                    {Object.entries(exercise).map(([key, value]) => (
                                        key !== 'date' && key !== '$id' && key !== '$collectionId' && key !== '$permissions' && key !== '$databaseId' && key !== '$createdAt' && key !== '$updatedAt' && key !== 'userId' && (
                                            <View key={key} style={styles.row}>
                                                <Text style={styles.label}>{key.replace(/_/g, ' ')}:</Text>
                                                <Text style={styles.value}>{`${value} reps`}</Text>
                                            </View>
                                        )
                                    ))}
                                </View>
                            ))
                        ) : (
                            <Text style={styles.noExerciseText}>No exercises for this day...</Text>
                        )}
                    </View>
                ))}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    backIcon: {
        position: 'absolute',
        top: 0,
        left: 0,
        borderRadius: 8,
        padding: 3,
        zIndex: 1
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1F2544',
        paddingTop: 50
    },
    dayContainer: {
        width: 300,
        backgroundColor: '#393E46',
        borderColor: 'aqua',
        borderWidth: 1,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    dayText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
        color: 'aqua'
    },
    exerciseContainer: {
        marginBottom: 10,
    },
    timeText: {
        color: 'white',
        marginBottom: 5,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    label: {
        flex: 1,
        textAlign: 'right',
        paddingRight: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    value: {
        flex: 1,
        textAlign: 'left',
        color: 'aqua',
        fontWeight: 'bold'
    },
    noExerciseText: {
        color: 'white',
    },
});

export default Progress;
