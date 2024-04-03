import React from 'react'
import { StyledInput } from '../../../styles/input'
import { RoundedButton,Subtitle,Title, StyledView } from '../../../styles'

function BmiCalculator() {
  return (
    <StyledView>
    <Title>Bmi | Calculator</Title>
    <Subtitle>Let's calculate the best diet plan for you</Subtitle>
    <StyledInput keyboardType="numeric" placeholder="Enter your age"/>
    <StyledInput placeholder="Enter your password"/>
    <RoundedButton title="Let's GO!"/>
    </StyledView>
  )
}

export default BmiCalculator
