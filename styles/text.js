import styled from "styled-components/native";

export const Title = styled.Text`
font-size: ${props=>props.size||"30px"};
color: #EEEEEE;
position: ${props=>props.position||"relative"};
top: ${props=>props.top||"0px"};  
`
export const StyledTitle =({fontSize,position,top,title})=>
    <Title size={fontSize} position={position} top={top}>{title}</Title>
    

// export const StyledSubtitle = styled.Text`
// position: absolute;
// top: 100px;
// font-size: 16px;
// color: #C7C8CC;
// `

// export const Title = styled.Text`
// font-size: 30px;
// color: #EEEEEE;  
// `

// export const Subtitle = styled.Text`
// font-size: 16px;
// color: #C7C8CC; 
// `

