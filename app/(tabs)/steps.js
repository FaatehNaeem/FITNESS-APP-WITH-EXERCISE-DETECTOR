import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Alert } from 'react-native';
import { Pedometer } from 'expo-sensors';
import CircularProgress from 'react-native-circular-progress-indicator';
import { RoundedButton } from '../../styles';
import { createStepsData } from '../../lib/appwrite';
import { useGlobalContext } from '../../context/GlobalProvider';

const Steps = () => {
    const { user, setStepsData } = useGlobalContext();
    const [PedometerAvailability, setPedometerAvailability] = useState("Checking");
    const [StepCount, setStepCount] = useState(0);
    const DistanceCovered = StepCount ? (StepCount / 1275).toFixed(4) : "0";
    const CaloriesBurnt = DistanceCovered ? (parseFloat(DistanceCovered) * 60).toFixed(4) : "0";

    const handleStoreSteps = async () => {
        if (!user) {
            Alert.alert("Please log in to save your data.");
            return;
        }

        const parsedStepCount = parseInt(StepCount, 10);
        const parsedDistanceCovered = parseFloat(DistanceCovered);
        const parsedCaloriesBurnt = parseFloat(CaloriesBurnt);
        const documentId = user.$id;

        try {
            const result = await createStepsData(documentId, parsedStepCount, parsedDistanceCovered, parsedCaloriesBurnt);
            setStepsData(prevStepsData => [...prevStepsData, result]);
            Alert.alert("Data Saved Successfully");
        } catch (error) {
            console.error(error);
            Alert.alert("Failed to save data");
        }
    };

    useEffect(() => {
        let subscription;

        const subscribe = async () => {
            const isAvailable = await Pedometer.isAvailableAsync();
            setPedometerAvailability(String(isAvailable));

            if (isAvailable) {
                subscription = Pedometer.watchStepCount(result => {
                    setStepCount(result.steps);
                });
            }
        };

        subscribe();

        return () => {
            if (subscription) {
                subscription.remove();
            }
        };
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headingDesign}>
                    Pedometer availability: {PedometerAvailability}
                </Text>
            </View>

            <View style={styles.progressContainer}>
                <CircularProgress
                    value={StepCount}
                    maxValue={6500}
                    radius={120}
                    textColor={"#ecf0f1"}
                    activeStrokeColor={"aqua"}
                    inActiveStrokeColor={"blue"}
                    inActiveStrokeOpacity={1}
                    ActiveStrokeOpacity={1}
                    inActiveStrokeWidth={20}
                    activeStrokeWidth={30}
                    title={"Step Count"}
                    titleColor={"white"}
                    titleStyle={{ fontWeight: "bold" }}
                />
            </View>

            <View style={styles.footer}>
                <Text style={styles.textDesign}>
                    Distance Covered: {DistanceCovered} km
                </Text>

                <Text style={styles.textDesign}>
                    Calories Burnt: {CaloriesBurnt}
                </Text>
                <RoundedButton title={'Save Data'} onPress={handleStoreSteps} />
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1F2544",
    },
    background: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    headingDesign: {
        backgroundColor: "#00ADB5",
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        marginHorizontal: 20,
    },
    textDesign: {
        backgroundColor: "#00ADB5",
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        marginVertical: 5,
        width: '90%',
    },
});

export default Steps;
