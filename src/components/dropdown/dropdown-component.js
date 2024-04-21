import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
// import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
  { label: 'Not Active', value: '1' },
  { label: 'Lightly Active', value: '2' },
  { label: 'Moderately Active', value: '3' },
  { label: 'Very Active', value: '4' },
  { label: 'Extremely Active', value: '4' },

];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      itemTextStyle={styles.itemsStyle}
      itemContainerStyle={styles.itemContainerStyle}
      // activeColor={styles.activeItemStyle}
      mode='modal'
      data={data}
      labelField="label"
      valueField="value"
      placeholder={value ? value : 'Select Item'}
      value={value}
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

const styles = StyleSheet.create({
  dropdown: {
    marginTop: 15,
    height: 50,
    width: 300,
    borderBottomColor: '#00ADB5',
    borderBottomWidth: 0.5,
  },

  placeholderStyle: {
    fontSize: 20,
    color: '#00ADB5',
  },

  selectedTextStyle: {
    fontSize: 20,
    color:'#00ADB5',
  },

  itemContainerStyle: {
    backgroundColor: '#00ADB5',
  },

  itemsStyle: {
    fontSize: 16,
    color: 'white',
  },
  activeItemStyle: {
    backgroundColor: 'blue'
  }
});