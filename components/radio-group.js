import React, { useMemo } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { useGlobalContext } from '../context/GlobalProvider';

function Radio() {

    const {selectedId,setSelectedId} = useGlobalContext()

    const radioButtons = useMemo(() => ([
        {
            id: 'Male',
            label: 'Male',
            value: 'male',
            color: "white",
            labelStyle: {
                color: 'white',
            }
            
        },

        {
            id: 'Female',
            label: 'Female',
            value: 'female',
            color: "white",
            labelStyle: {
                color: 'white'
            }
        }
    ]), []);


  return (
    <RadioGroup
    radioButtons={radioButtons}
    onPress={(e)=>setSelectedId(e)}
    selectedId={selectedId}
    layout='row'      
    containerStyle={{ marginTop: 10 }}
/>
  )
}

export default Radio
