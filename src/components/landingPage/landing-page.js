import React from 'react'
import {StyledView,StyledImageBackground,StyledTitle,StyledSubtitle,RoundedButton} from '../../../styles/index'

function LandingPage() {

    return (

      <StyledView>
        <StyledImageBackground source={{uri:'https://images.unsplash.com/photo-1528720208104-3d9bd03cc9d4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}>
      <StyledTitle>Fit Flow</StyledTitle>
      <StyledSubtitle>Your All in one Fitness Companion</StyledSubtitle>
      <RoundedButton title='Get Started'/>
      </StyledImageBackground>
      </StyledView>
    )}
export default LandingPage
