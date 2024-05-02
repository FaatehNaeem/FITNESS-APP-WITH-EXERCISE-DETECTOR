import React, { useState } from 'react'
import { RoundedButton, Title } from '../../../styles'
import { View, Text } from 'react-native'
import { MainContainer, StyledView } from '../../../styles/wrapper'
// import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

function HomePage() {
  return (

    <StyledView justifyContent={'none'}>

      <Title style={{ margin: 50 }}>Fit Flow</Title>

      <MainContainer
        width={'300px'}
        height={'150px'}
        title='Calories'
        backgroundColor={'#393E46'}
        borderRadius={'20px'}
        marginTop={'10px'}
        flex={'0.3'}
        justifyContent={'start'}
        alignItems={'start'}
      />

<View style={styles.view}>
      <RoundedButton title={'Edit'} width={'100px'}></RoundedButton>
      </View>

      <MainContainer
        width={'300px'}
        title='FAATEH'
        backgroundColor={'#393E46'}
        borderRadius={'20px'}
        marginTop={'10px'}
        flex={'0.3'}
        justifyContent={'start'}
        alignItems={'start'}
      />

    </StyledView>

  )
}

const styles = StyleSheet.create({
  view: {
    width: "100%",
    alignItems: "left",
    backgroundColor: "#1F2544",
  }
})

export default HomePage


// take width and height as prop in style component//
// flex : 1 or 0 as prop //
// justify content and align item as prop //
// icons integration //
// exercises api integration//
// drawer navigation//


// --------------

// div - space-between - direction = row
//  |
// 2 divs - div , div
//           |     |
//         flex-direction = column 


