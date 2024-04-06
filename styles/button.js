import styled from "styled-components/native";

export const RoundedTouchableOpacity = styled.TouchableOpacity`
width : 250px;
height:50px;
background-color: #00ADB5;
border-radius : 50px;  
justify-content:center;
align-items:center;
marginTop:15px
`
export const ButtonText = styled.Text`
font-size: 20px;
color:white;
textShadowColor: #222831;
textShadowRadius: 8px;
`

export const RoundedButton = ({ title,onPress }) => {
    return (
        <RoundedTouchableOpacity onPress={onPress}>
            <ButtonText style={{ textShadowOffset: { width: 2, height: 1 } }}>{title}</ButtonText>
        </RoundedTouchableOpacity>
    )
}