import { StyledInput } from '../../../styles/input'
import { RoundedButton, StyledTitle, StyledView } from '../../../styles'
import Radio from '../radioGroup/radio-group'
import DropDownComponent from '../dropdown/dropdown-component'

function CalorieCalculator({ navigation }) {

    return (
        <StyledView>
            <StyledTitle title="Calorie Calculator"></StyledTitle>
            <StyledTitle fontSize={"16px"} title="Let's calculate the best calorie intake for you"></StyledTitle>
            <StyledInput keyboardType="numeric" placeholder="Enter your age" />
            <DropDownComponent />
            <DropDownComponent
                data={data = [
                    { label: 'Loose Weight', value: '1' },
                    { label: 'Maintain Weight', value: '2' },
                    { label: 'Gain Weight', value: '3' },

                ]} placeholderValue='Enter Weight Goal' />

            <Radio />
            <RoundedButton title="Calculate" onPress={() => navigation.navigate('FIT FLOW')} />
        </StyledView>
    )
}


export default CalorieCalculator
