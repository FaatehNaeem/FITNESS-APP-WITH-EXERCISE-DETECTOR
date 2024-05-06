import React from 'react'
import { RoundedButton, StyledTitle, Title } from '../../../styles'
import { View,Text } from 'react-native'
import { ClickableViews, MainContainer, StyledView } from '../../../styles/wrapper'
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
        flex={'0.4'}
        justifyContent={'start'}
        alignItems={'start'}
        flexDirection={'row'}
      />

      <View style={styles.view}>
        <RoundedButton title={'Edit'} width={'100px'}></RoundedButton>
      </View>


    <StyledTitle title="DISCOVER" top={"15px"}/>

    <ClickableViews
            width={'350px'}
            height={'200px'}
            backgroundColor={"null"}
            borderRadius={'20px'}
            marginTop={'50px'}
            flex={'0.4'}
            justifyContent={'start'}
            alignItems={'start'}
            flexDirection={'row'}
            />
{/* <View style={{flexDirection:"row",backgroundColor:"blue",padding:12,marginTop:15,flex:0.5}}>
<View style={{backgroundColor:"red",flexDirection:"column",backgroundColor:"blue",padding:12,flex:0.5}}>
<ClickableViews
 width={'150px'}
 height={'100px'}
 title="faateh"
 backgroundColor={'#393E46'}
 borderRadius={'20px'}
 marginTop={'1px'}
 flex={'0.25'}
 justifyContent={'center'}
 alignItems={'center'}
 flexDirection={'row'}
/>

<ClickableViews
 width={'150px'}
 height={'50px'}
 title="faateh"
 backgroundColor={'#393E46'}
 borderRadius={'20px'}
 marginTop={'100px'}
 flex={'1'}
 justifyContent={'center'}
 alignItems={'center'}
 flexDirection={'row'}
/>
</View>

<View style={{flexDirection:"column",backgroundColor:"blue",padding:12,marginTop:15,flex:0.5}}>

<ClickableViews
 width={'150px'}
 height={'50px'}
 title="faateh"
 backgroundColor={'#393E46'}
 borderRadius={'20px'}
 marginTop={'100px'}
 flex={'1'}
 justifyContent={'center'}
 alignItems={'center'}
 flexDirection={'row'}
/>
<ClickableViews
 width={'150px'}
 height={'50px'}
 title="faateh"
 backgroundColor={'#393E46'}
 borderRadius={'20px'}
 marginTop={'100px'}
 flex={'4'}
 justifyContent={'center'}
 alignItems={'center'}
 flexDirection={'row'}
/>
</View>
</View> */}

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


