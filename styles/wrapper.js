import styled from "styled-components/native";
import { Title } from "./text";

export const StyledView = styled.View`
width:${props => props.width || '100%'};
marginTop:${props => props.marginTop || '0px'};
backgroundColor:${props => props.backgroundColor || '#1F2544'};
flex:${props => props.flux || '1'};
borderRadius:${props => props.radius || '0'};
justifyContent:${props => props.justifyContent || 'center'};
alignItems:${props => props.alignItems || 'center'};
`

export const MainContainer = ({ width, flex, backgroundColor, title, borderRadius, justifyContent, marginTop, alignItems }) =>
    <StyledView backgroundColor={backgroundColor} width={width} radius={borderRadius.toString()} flux={flex.toString()} justifyContent={justifyContent} marginTop={marginTop} alignItems={alignItems}>
        <Title>{title}</Title>
    </StyledView>