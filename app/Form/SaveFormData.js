import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useGlobalContext } from '../../context/GlobalProvider';
import { createFormExercises } from '../../lib/appwrite';
import { RoundedButton } from '../../styles';

function SaveFormData() {
    const { repsData, setFormData, user, setRepsData } = useGlobalContext();

    if (!user) {
        return <Text>Please log in to see your data.</Text>;
    }

    const documentId = user.$id;

    const handleExerciseCompletion = async () => {
        try {
            const response = await createFormExercises(documentId, repsData);
            setFormData(prevData => [...prevData, response]);
            Alert.alert("Data Saved Successfully");
            setRepsData({
                balance_leg_left: 0,
                balance_leg_right: 0,
                frontPushups: 0,
                sidePushups: 0,
                frontSquats: 0,
                sideSquats: 0,
                frontLunges: 0,
                sideLunges: 0,
                frontPlank: 0,
                sidePlank: 0
            });
        } catch (error) {
            console.warn(error);
        }
    };

    return (
        <>
            <Ionicons
                onPress={() => router.replace('/form')}
                style={styles.backIcon}
                name="arrow-back-outline"
                size={24}
                color="aqua"
            />
            <View style={styles.container}>
                {Object.entries(repsData).length > 0 ? (
                    Object.entries(repsData).map(([key, value]) => (
                        <View key={key} style={styles.row}>
                            <Text style={styles.label}>{`Exercise: ${key}`}</Text>
                            <Text style={styles.value}>{`Reps: ${value}`}</Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.noExerciseText}>No exercise found</Text>
                )}
                <RoundedButton title={"Save Data"} onPress={handleExerciseCompletion} />
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    backIcon: {
        position: 'absolute',
        top: 0,
        left: 10,
        borderRadius: 8,
        padding: 3,
        zIndex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50,
        backgroundColor: '#1F2544',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 4,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#393E46',
        borderRadius: 8,
        borderColor: 'aqua',
        borderWidth: 1
    },
    label: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'left',
        color: "white",
    },
    value: {
        flex: 1,
        textAlign: 'right',
        color: 'aqua'
    },
    noExerciseText: {
        fontSize: 16,
        color: 'white',
        marginBottom: 20,
    },
});

export default SaveFormData;
