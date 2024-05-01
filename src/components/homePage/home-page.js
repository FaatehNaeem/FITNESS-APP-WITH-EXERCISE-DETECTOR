import React from 'react'
import { Container, RoundedButton, StyledTitle, Title } from '../../../styles'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'

function HomePage() {
  return (

    <View style={styles.viewstyle}>
      <Title>Fit Flow</Title>
      <Container>
        <Title>Calories</Title>
      </Container>
      <Container>
        <Title>Calories</Title>
      </Container>
    </View>

  )
}

const styles = StyleSheet.create({
  viewstyle: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1F2544"
  }
})

export default HomePage
