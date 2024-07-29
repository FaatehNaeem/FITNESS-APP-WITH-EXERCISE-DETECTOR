import styled from "styled-components";

export const StyledInput = styled.TextInput
    `
backgroundColor:${props => props.backgroundColor || '#EEEEEE'};
color:${props => props.color || '#393E46'};
width:${props => props.width || '300px'};
height:${props => props.height || '50px'};
borderRadius:${props => props.borderRadius || '50px'};
textAlign:${props => props.textAlign || 'center'};
marginTop:${props => props.marginTop || '15px'};
placeholder: ${props => props.placeholder || 'Enter your details'}
`

export const Input = ({ onChangeText, value, placeholder, keyboardType, backgroundColor, color, width, height, borderRadius, textAlign, marginTop, secureTextEntry }) => {
    return (
        <StyledInput onChangeText={onChangeText} value={value} placeholder={placeholder} keyboardType={keyboardType} secureTextEntry={secureTextEntry} />

    )

}