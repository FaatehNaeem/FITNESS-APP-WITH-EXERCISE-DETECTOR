import styled from "styled-components/native";

export const RoundedTouchableOpacity = styled.TouchableOpacity`
position: absolute;
width : 200px;
height:50px;
background-color: #00ADB5;
border-radius : 100px;  
justify-content:center;
align-items:center;
`

export const ButtonText = styled.Text`
font-size: 20px;
color:white;
textShadowColor: #222831;
textShadowRadius: 8px;
`

export const RoundedButton = ({ title }) => {
    return (
        <RoundedTouchableOpacity>
            <ButtonText style={{textShadowOffset:{width:2,height:1}}}>{title}</ButtonText>
        </RoundedTouchableOpacity>
    )
}