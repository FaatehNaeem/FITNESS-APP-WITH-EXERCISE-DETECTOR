import styled from "styled-components/native";

export const RoundedTouchableOpacity = styled.TouchableOpacity`
width : ${props=>props.width || '250px'};
height:50px;
background-color: #00ADB5;
border-radius : 50px;  
justifyContent:${props=>props.justifyContent || 'center'};
align-items:center;
marginTop:15px
`
export const ButtonText = styled.Text`
font-size: 20px;
color:white;
textShadowColor: #222831;
textShadowRadius: 8px;
`

export const RoundedButton = ({ title,onPress,width}) => {
    return (
        <RoundedTouchableOpacity onPress={onPress} width={width}>
            <ButtonText style={{ textShadowOffset: { width: 2, height: 1 } }}>{title}</ButtonText>
        </RoundedTouchableOpacity>
    )
}