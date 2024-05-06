import styled from "styled-components/native";

export const Title = styled.Text`
font-size: ${props=>props.size||"30px"};
color: #EEEEEE;
position: ${props=>props.position||"relative"};
top: ${props=>props.top||"0px"};  
textAlign:${props=>props.textAlign||"center"}
`
export const StyledTitle =({fontSize,position,top,title,textAlign})=>
    <Title size={fontSize} textAlign={textAlign} position={position} top={top}>{title}</Title>


