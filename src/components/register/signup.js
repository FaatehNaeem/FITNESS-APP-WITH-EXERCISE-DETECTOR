import React from 'react'
import { StyledInput } from '../../../styles/input'
import { RoundedButton,Subtitle,Title, StyledView } from '../../../styles'

function SignUp({navigation}) {
    return (
    <StyledView>
    <Title>Welcome Onboard!</Title>
    <Subtitle>Let's get you started</Subtitle>
    <StyledInput placeholder="Enter your name"/>
    <StyledInput placeholder="Enter your email"/>
    <StyledInput placeholder="Enter your password"/>
    <StyledInput placeholder="Confirm password"/>

    <RoundedButton title="Register" onPress={()=>navigation.navigate('Login')}/>
    <Subtitle style={{ marginTop: 15 }}>Already have an account ? Login</Subtitle>
    </StyledView>
    )
}

export default SignUp
