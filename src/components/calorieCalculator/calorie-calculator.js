import { StyledInput } from '../../../styles/input'
import { RoundedButton, Subtitle, Title, StyledView } from '../../../styles'
import Radio from '../radioGroup/radio-group'
import DropDownComponent from '../dropdown/dropdown-component'

function CalorieCalculator() {

    return (
        <StyledView>
            <Title>Calorie Calculator</Title>
            <Subtitle>Let's calculate the best calorie intake for you</Subtitle>
            <StyledInput keyboardType="numeric" placeholder="Enter your age" />
            <DropDownComponent />
            <Radio />
            <RoundedButton title="Calculate" />
        </StyledView>
    )
}


export default CalorieCalculator
