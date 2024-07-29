import React,{useState} from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { FormCardPropTypes, FormCardDefaultProps } from './props';
import { Image, Text, StyleSheet, View, Alert } from 'react-native';
import {images} from '../../constants';
import { RoundedButton } from '../../styles';

function FormCard({
    id = FormCardDefaultProps.id,
    imageUrl = FormCardDefaultProps.imageUrl,
    exerciseTitle = FormCardDefaultProps.exerciseTitle,
    data = FormCardDefaultProps.data,
    placeholderValue = FormCardDefaultProps.placeholderValue,
    handleForm = FormCardDefaultProps.handleForm
}) {
    const [isFocus3, setIsFocus3] = useState(false);
    const [value3, setValue3] = useState();

    const handleFormCheck = () => {
        if (!value3) {
            Alert.alert("Please choose a difficulty level");
        } else {
            handleForm(value3);
        }
    };

    return (
        <View style={styles.cardContainer}>
            {images[imageUrl] ? (
                <Image source={images[imageUrl]} style={styles.image} />
            ) : (
                <Text>Image not found</Text>
            )}
            <Text style={styles.ExerciseText}>{exerciseTitle}</Text>
            <Dropdown
                style={[styles.dropdown, isFocus3 && { borderColor: '#00ADB5' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                itemTextStyle={styles.itemsStyle}
                data={data}
                labelField="label"
                valueField="value"
                placeholder={!isFocus3 && !value3 ? placeholderValue : ""}
                value={value3}
                onFocus={() => setIsFocus3(true)}
                onBlur={() => setIsFocus3(false)}
                onChange={item => {
                    setValue3(item.value);
                    setIsFocus3(false);
                }}
            />
            <RoundedButton title='Check Form' width={'150px'} onPress={handleFormCheck} />
        </View>
    );
}

FormCard.propTypes = FormCardPropTypes;

const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 2,
        borderColor:'aqua',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#393E46',
        marginVertical: 10,
        padding: 20,
        height: 350,
    },
    dropdown: {
        marginVertical: 15,
        height: 50,
        width: 200,
        borderBottomColor: 'aqua',
        borderBottomWidth: 2,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
        borderRadius: 100,
    },
    ExerciseText: {
        color: 'white',
        fontSize: 20
    },
    placeholderStyle: {
        fontSize: 17,
        color: 'white',
    },
    selectedTextStyle: {
        fontSize: 17,
        color: 'aqua',
    },
    itemsStyle: {
        fontSize: 16,
        color: 'black',
    },
});

export default FormCard;



