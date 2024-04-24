import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { DropDownPropTypes, DropDownDefaultProps } from './props';
// import PropTypes from 'prop-types'
// const data = [
//   { label: 'Not Active', value: '1' },
//   { label: 'Lightly Active', value: '2' },
//   { label: 'Moderately Active', value: '3' },
//   { label: 'Very Active', value: '4' },
//   { label: 'Extremely Active', value: '5' },

// ];

const DropdownComponent = ({
  data = [
    { label: 'Not Active', value: '1' },
    { label: 'Lightly Active', value: '2' },
    { label: 'Moderately Active', value: '3' },
    { label: 'Very Active', value: '4' },
    { label: 'Extremely Active', value: '5' },

  ],
  placeholderValue = 'Enter Activity Level'
}
) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Dropdown
      style={[styles.dropdown, isFocus && { borderColor: '#00ADB5' }]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      itemTextStyle={styles.itemsStyle}
      // itemContainerStyle={styles.itemContainerStyle}
      // mode='modal'
      data={data}
      labelField="label"
      valueField="value"
      placeholder={value ? value : placeholderValue}
      value={value}
      onFocus={() => setIsFocus(true)}
      onChange={item => {
        setValue(item.label);
      }}
    // renderLeftIcon={() => (
    //   <Text style={styles.selectedTextStyle}>{value}</Text>
    // )}

    />
  );
};

export default DropdownComponent;

DropdownComponent.proptypes = DropDownPropTypes
DropdownComponent.proptypes = DropDownDefaultProps


const styles = StyleSheet.create({
  dropdown: {
    marginVertical: 15,
    height: 50,
    width: 300,
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
  },

  placeholderStyle: {
    fontSize: 20,
    color: '#00ADB5',
  },

  selectedTextStyle: {
    fontSize: 20,
    color: '#00ADB5',
  },

  // itemContainerStyle: {
  //   backgroundColor: '#00ADB5',
  // },

  itemsStyle: {
    fontSize: 16,
    color: 'black',
  },

});