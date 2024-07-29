import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import FormCard from '../../components/FormComponent/FormCard';
import { router } from 'expo-router';
import { RoundedButton } from '../../styles';
import { View } from 'react-native-animatable';

function Form() {
    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 15, flexDirection: 'row' }}>
                <RoundedButton title={'Save Data'} width={'100px'} height={'40px'} onPress={() => router.replace('/Form/SaveFormData')} />
                <RoundedButton title={'Progress'} width={'100px'} height={'40px'} onPress={() => router.replace('/Form/Progress')} />
            </View>
            <FormCard imageUrl="frontPushups" handleForm={(difficulty) => router.replace('/Form/FrontFacingPushup', { difficulty })} />
            <FormCard imageUrl="sidePushups" exerciseTitle='Side Faced Pushup' handleForm={(difficulty) => router.replace('/Form/SideFacingPushup', { difficulty })} />
            <FormCard imageUrl="frontSquats" exerciseTitle='Front Faced Squat' handleForm={(difficulty) => router.replace('/Form/FrontFacingSquat', { difficulty })} />
            <FormCard imageUrl="sideSquats" exerciseTitle='Side Faced Squat' handleForm={(difficulty) => router.replace('/Form/SideFacingSquat', { difficulty })} />
            <FormCard imageUrl="frontLunges" exerciseTitle='Front Faced Lunge' handleForm={(difficulty) => router.replace('/Form/FrontFacingLunge', { difficulty })} />
            <FormCard imageUrl="sideLunges" exerciseTitle='Side Faced Lunge' handleForm={(difficulty) => router.replace('/Form/SideFacingLunge', { difficulty })} />
            <FormCard imageUrl="frontPlank" exerciseTitle='Front Faced Plank' handleForm={(difficulty) => router.replace('/Form/FrontFacingPlank', { difficulty })} />
            <FormCard imageUrl="sidePlank" exerciseTitle='Side Faced Plank' handleForm={(difficulty) => router.replace('/Form/SideFacingPlank', { difficulty })} />
            <FormCard imageUrl="standingOnLeftLeg" exerciseTitle='Balance Left Leg' handleForm={(difficulty) => router.replace('/Form/BalanceOnLeftLeg', { difficulty })} />
            <FormCard imageUrl="standingOnRightLeg" exerciseTitle='Balance Right Leg' handleForm={(difficulty) => router.replace('/Form/BalanceOnRightLeg', { difficulty })} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        padding: 40,
        backgroundColor: '#1F2544',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

export default Form;
