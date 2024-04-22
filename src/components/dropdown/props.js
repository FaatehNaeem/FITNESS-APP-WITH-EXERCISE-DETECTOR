import PropTypes from 'prop-types';


export const DropDownPropTypes = {
    data: PropTypes.array,
    placeholderValue: PropTypes.string
}

export const DropDownDefaultProps = {
    data: [
        { label: 'Not Active', value: '1' },
        { label: 'Lightly Active', value: '2' },
        { label: 'Moderately Active', value: '3' },
        { label: 'Very Active', value: '4' },
        { label: 'Extremely Active', value: '5' },
    ],

    placeholderValue: 'Enter'
};
