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
            <DropDownComponent
                data={data = [
                    { label: 'Loose Weight', value: '1' },
                    { label: 'Maintain Weight', value: '2' },
                    { label: 'Gain Weight', value: '3' },

                ]} placeholderValue='Enter Weight Goal' />

            <Radio />
            <RoundedButton title="Calculate" />
        </StyledView>
    )
}


export default CalorieCalculator
