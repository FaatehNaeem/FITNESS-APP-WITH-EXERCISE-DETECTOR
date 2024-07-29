import styled from "styled-components/native";

export const RoundedTouchableOpacity = styled.TouchableOpacity`
  width: ${props => props.width || '250px'};
  height: ${props => props.height || '50px'};
  background-color: #00ADB5;
  border-radius: 50px;  
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: center;
  margin-top: ${props => props.marginTop || '15px'};
  top:-5px
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
  text-shadow-color: #222831;
  text-shadow-radius: 8px;
`;

export const RoundedButton = ({ title, onPress, width, height, marginTop }) => {
    return (
        <RoundedTouchableOpacity onPress={onPress} width={width} height={height} marginTop={marginTop}>
            <ButtonText style={{ textShadowOffset: { width: 2, height: 1 } }}>{title}</ButtonText>
        </RoundedTouchableOpacity>
    );
};
