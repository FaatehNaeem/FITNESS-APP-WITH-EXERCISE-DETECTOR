import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { DropDownPropTypes, DropDownDefaultProps } from './props';
import { useGlobalContext } from '../../context/GlobalProvider';

const DropdownComponent = ({
  data = DropDownDefaultProps.data,
  placeholderValue = DropDownDefaultProps.placeholderValue,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const { value, setValue } = useGlobalContext();

  return (
    <Dropdown
      style={[styles.dropdown, isFocus && { borderColor: '#00ADB5' }]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      itemTextStyle={styles.itemsStyle}
      data={data}
      labelField="label"
      valueField="value"
      placeholder={!isFocus && !value ? placeholderValue : ""}
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={item => {
        setValue(item.value);
        setIsFocus(false);
      }}
    />
  );
};

DropdownComponent.propTypes = DropDownPropTypes;

export default DropdownComponent;

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
  itemsStyle: {
    fontSize: 16,
    color: 'black',
  },
});
