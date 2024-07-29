import React from 'react'
import { RoundedButton, StyledTitle, StyledView } from '../styles'
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { router } from 'expo-router';

function Edit() {
    return (
        <>
            <Ionicons
                onPress={() => router.replace('/home')}
                style={styles.backIcon}
                name="arrow-back-outline"
                size={24}
                color="aqua"
            />
            <StyledView>
                <StyledTitle title={'What do you wish to update?'} fontSize={'26px'}></StyledTitle>
                <StyledTitle top={'5px'} fontSize={"16px"} title="Don't worry we've got you covered !"/>

                <RoundedButton title={'BMI Dimensions'} onPress={()=>router.replace('/Edit-Bmi')}/>
                <RoundedButton title={'Calorie Dimensions'} onPress={() => router.replace('/Edit-Calories')}/>

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
    }
})

export default Edit
