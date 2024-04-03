import React from 'react'
import { StyledInput } from '../../../styles/input'
import { RoundedButton,Subtitle,Title, StyledView } from '../../../styles'

function Login({navigation}) {
  return (
    <StyledView>
    <Title>Welcome Back!</Title>
    <Subtitle>Just another step away</Subtitle>
    <StyledInput placeholder="Enter your email"/>
    <StyledInput placeholder="Enter your password"/>
    <RoundedButton title="Login" onPress={()=>navigation.navigate('Lets get you fit')}/>
    <Subtitle style={{marginTop:15}}>Don't have an account? SignUp</Subtitle>
    </StyledView>
  )
}

export default Login
