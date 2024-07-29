import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useGlobalContext } from '../context/GlobalProvider';

function Progress() {
    const { user, stepsData } = useGlobalContext();

    const userStepsData = stepsData.filter(record => record.userId === user.$id);

    const formatDataByDay = (data) => {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const formattedData = daysOfWeek.map(day => ({
            day,
            records: data.filter(item => {
                const recordDate = new Date(item.date);
                return recordDate.getDay() === daysOfWeek.indexOf(day);
            })
        }));
        return formattedData;
    };

    const weeklyData = formatDataByDay(userStepsData);

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {weeklyData.map((dayData, index) => (
                <View key={index} style={styles.dayContainer}>
                    <Text style={styles.dayText}>{dayData.day}</Text>
                    {dayData.records.length > 0 ? (
                        dayData.records.map((record, recordIndex) => (
                            <View key={recordIndex} style={styles.recordContainer}>
                                <Text style={styles.timeText}>{new Date(record.date).toLocaleTimeString()}</Text>
                                <View style={styles.row}>
                                    <Text style={styles.label}>Steps:</Text>
                                    <Text style={styles.value}>{record.steps}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.label}>Distance:</Text>
                                    <Text style={styles.value}>{record.distance.toFixed(2)} km</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.label}>Calories:</Text>
                                    <Text style={styles.value}>{record.caloriesBurnt.toFixed(2)} kcal</Text>
                                </View>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.noDataText}>No steps for this day...</Text>
                    )}
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1F2544',
        paddingTop: 20
    },
    dayContainer: {
        width: 300,
        backgroundColor: '#393E46',
        borderColor: 'aqua',
        borderWidth: 1,
        padding: 14,
        marginVertical: 5,
        borderRadius: 5,
    },
    dayText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
        color: 'aqua'
    },
    recordContainer: {
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
    noDataText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default Progress;
