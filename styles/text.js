import styled from "styled-components/native";

export const Title = styled.Text`
font-size: ${props => props.size || "30px"};
color: ${props => props.color || '#EEEEEE'};
position: ${props => props.position || "relative"};
top: ${props => props.top || "0px"};  
textAlign:${props => props.textAlign || "center"};
fontWeight:${props => props.fontWeight || 'none'}
`
export const StyledTitle = ({ fontSize, position, top, title, textAlign, onPress, color, fontWeight }) => {
    return (
        <Title size={fontSize}
            textAlign={textAlign}
            position={position}
            top={top}
            onPress={onPress}
            color={color}
            fontWeight={fontWeight}>
            {title}
        </Title>
    )
}
