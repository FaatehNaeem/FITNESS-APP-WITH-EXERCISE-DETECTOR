import { RoundedButton, StyledTitle, StyledView,StyledInput} from '../../../styles'

function BmiCalculator({ navigation }) {

  return (
    <StyledView>
      <StyledTitle title="Bmi | Calculator"></StyledTitle>
      <StyledTitle fontSize={"16px"} title="Let's calculate your body type with Fit Flow"></StyledTitle>
      <StyledInput keyboardType="numeric" placeholder="Enter your height cm" />
      <StyledInput keyboardType="numeric" placeholder="Enter your weight kg" />
      <RoundedButton title="Calculate" onPress={() => navigation.navigate('Calorie Calculator')} />
    </StyledView>
  )
}

export default BmiCalculator
