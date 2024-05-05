import React from 'react'
import { StyledInput } from '../../../styles/input'
import { RoundedButton,StyledView,StyledTitle} from '../../../styles'

function Login({navigation}) {
  return (
    <StyledView>
    <StyledTitle title={"Welcome Back!"}></StyledTitle>
    <StyledTitle fontSize={"16px"} title={"Just another step away"}></StyledTitle>
    <StyledInput placeholder="Enter your email"/>
    <StyledInput placeholder="Enter your password"/>
    <RoundedButton title="Login" onPress={()=>navigation.navigate('Lets get you fit')}/>
    <StyledTitle top={"5px"} fontSize={"16px"} title={"Don't have an account? SignUp"} style={{marginTop:15}}></StyledTitle>
    </StyledView>
  )
}

export default Login
