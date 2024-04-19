import React, { useMemo, useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

function Radio() {

    const [selectedId, setSelectedId] = useState();

    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'Male',
            value: 'male',
            color: "white",
            labelStyle: {
                color: 'white'
            }
        },

        {
            id: '2',
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
    onPress={setSelectedId}
    selectedId={selectedId}
    layout='row'
    containerStyle={{ marginTop: 10 }}
/>
  )
}

export default Radio
