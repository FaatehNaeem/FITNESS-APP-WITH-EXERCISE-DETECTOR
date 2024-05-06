import React from 'react'
import { RoundedButton, Title } from '../../../styles'
import { View } from 'react-native'
import { DiscoverSection, MainContainer, StyledView } from '../../../styles/wrapper'
import { StyleSheet } from 'react-native'

function HomePage() {
  return (

    <StyledView justifyContent={'none'}>

      <Title style={{ marginTop: 40 }}>Fit Flow</Title>

      <MainContainer
        width={'300px'}
        height={'150px'}
        title='Calories'
        backgroundColor={'#393E46'}
        borderRadius={'20px'}
        marginTop={'20px'}
        flex={'0.4'}
        justifyContent={'start'}
        alignItems={'start'}
        flexDirection={'row'}
      />

      <View style={styles.view}>
        <RoundedButton title={'Edit'} width={'100px'}></RoundedButton>
      </View>

      <DiscoverSection title="Discover" />

    </StyledView>

  )
}

const styles = StyleSheet.create({
  view: {
    width: "80%",
    alignItems: "flex-end",
    backgroundColor: "#1F2544",
  }
})

export default HomePage



