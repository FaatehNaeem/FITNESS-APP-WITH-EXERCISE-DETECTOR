import PropTypes from 'prop-types';

export const DropDownPropTypes = {
    data: PropTypes.array,
    placeholderValue: PropTypes.string,
};

export const DropDownDefaultProps = {
    data: [
        { label: 'Not Active', value: 'Not Active' },
        { label: 'Lightly Active', value: 'Lightly Active' },
        { label: 'Moderately Active', value: 'Moderately Active' },
        { label: 'Very Active', value: 'Very Active' },
        { label: 'Extremely Active', value: 'Extremely Active' },
    ],
    placeholderValue: 'Enter Activity Level',
};
