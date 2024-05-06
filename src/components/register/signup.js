import React from 'react'
import {RoundedButton,StyledView,StyledTitle,StyledInput} from '../../../styles'

function SignUp({navigation}) {
    return (
    <StyledView>
    <StyledTitle title={"Welcome Onboard!"}></StyledTitle>
    <StyledTitle fontSize={"16px"} title={"Let's get you started"}></StyledTitle>
    <StyledInput placeholder="Enter your name"/>
    <StyledInput placeholder="Enter your email"/>
    <StyledInput placeholder="Enter your password"/>
    <StyledInput placeholder="Confirm password"/>

    <RoundedButton title="Register" onPress={()=>navigation.navigate('Login')}/>
    <StyledTitle top={"5px"} fontSize={"16px"} title={"Already have an account ? Login"} style={{ marginTop: 15 }}></StyledTitle>
    </StyledView>
    )
}

export default SignUp
