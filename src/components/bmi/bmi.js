import { StyledInput } from '../../../styles/input'
import { RoundedButton, Subtitle, Title, StyledView } from '../../../styles'

function BmiCalculator({ navigation }) {

  return (
    <StyledView>
      <Title>Bmi | Calculator</Title>
      <Subtitle>Let's calculate your body type with Fit Flow</Subtitle>
      <StyledInput keyboardType="numeric" placeholder="Enter your height cm" />
      <StyledInput keyboardType="numeric" placeholder="Enter your weight kg" />
      <RoundedButton title="Calculate" onPress={() => navigation.navigate('Calorie Calculator')} />
    </StyledView>
  )
}

export default BmiCalculator
