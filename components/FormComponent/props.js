import PropTypes from 'prop-types';

export const FormCardPropTypes = {
    imageUrl: PropTypes.string.isRequired,
    exerciseTitle: PropTypes.string,
    data: PropTypes.array,
    placeholderValue: PropTypes.string,
    handleForm: PropTypes.func,
    id:PropTypes.string
};

export const FormCardDefaultProps = {
    imageUrl: "frontPushups",
    exerciseTitle: "Front Faced Pushup",
    data: [
        { label: 'Easy', value: 'easy' },
        { label: 'Normal', value: 'normal' },
    ],
    placeholderValue: 'Choose Difficulty level',
    handleForm: () => { },
    id:'frontPushups'
};
