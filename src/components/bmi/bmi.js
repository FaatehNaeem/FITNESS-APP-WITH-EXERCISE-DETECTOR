import React, { useMemo, useState } from 'react';
import { StyledInput } from '../../../styles/input'
import { RoundedButton,Subtitle,Title, StyledView } from '../../../styles'
import { View } from 'react-native'
import RadioGroup from 'react-native-radio-buttons-group';


function BmiCalculator() {
  const radioButtons = useMemo(() => ([
    {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Male',
        value: 'male',
        color:"white",
        labelStyle:{
          color:'white'
        }
    },

    {
        id: '2',
        label: 'Female',
        value: 'female',
        color:"white",
        labelStyle:{
          color:'white'
        }
    }
]), []);
const [selectedId, setSelectedId] = useState();
  return (
    <StyledView>
    <Title>Bmi | Calculator</Title>
    <Subtitle>Let's calculate the best diet plan for you</Subtitle>
    <StyledInput keyboardType="numeric" placeholder="Enter your age"/>
    <View style={{display:'flex',flexDirection:"row",width:"80%"}}>
    <StyledInput keyboardType="numeric" placeholder="Enter your height cm"/>
    </View>
    <StyledInput keyboardType="numeric" placeholder="Enter your weight kg"/>
    <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
            layout='row'
            containerStyle={{marginTop:10}}
        />
    <RoundedButton title="Let's GO!"/>
    </StyledView>
  )
}

export default BmiCalculator
