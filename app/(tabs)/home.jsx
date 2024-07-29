import { React } from 'react'
import { MainContainer, StyledView } from '../../styles/wrapper'
import { StyleSheet, View, Linking, TouchableOpacity } from 'react-native'
import { RoundedButton, Title, StyledTitle } from '../../styles'
import { router } from 'expo-router'
import { useGlobalContext } from '../../context/GlobalProvider'
import Icon from 'react-native-vector-icons/FontAwesome5';

const Home = () => {

  const { userCalories, Bmi } = useGlobalContext()

  const handleDiscord = () => {

    const discordUrl = 'https://discord.com/invite/2T57EUrSGV';

    Linking.openURL(discordUrl).catch(err => console.error("Couldn't load page", err));
  }

  const handleFood = () => {
    router.push('/DietPlan')
  }

  const handleExercises = () => {
    router.push('/Exercises')
  }

  const handleSteps = () => {
    router.push('/Progress')

  }
  return (
    <StyledView justifyContent={'none'}>

      <View style={{ flexDirection: 'row', gap: 5 }}>
        <Title style={{ marginTop: 40, fontStyle: 'italic', fontWeight: 'bold' }}>FIT</Title>
        <Title style={{ marginTop: 40, fontStyle: 'italic', fontWeight: 'bold', color: 'aqua' }}>FLOW</Title>
      </View>

      <MainContainer
        width={'320px'}
        height={'150px'}
        title='Calories'
        backgroundColor={'#393E46'}
        borderRadius={'20px'}
        marginTop={'20px'}
        flex={'0.4'}
        justifyContent={'start'}
        alignItems={'start'}
        flexDirection={'row'}
        userCalories={userCalories}
        Bmi={Bmi}
      />

      <View style={styles.view}>
        <RoundedButton title={'Edit'} width={'100px'} onPress={() => router.replace('/Edit')}></RoundedButton>
      </View>

      <>
        <View style={{ flexDirection: 'row' }}>
          <Title style={{ fontStyle: 'italic', fontWeight: 'bold' }}>DISCOVER</Title>
        </View>

        <View style={{ width: '100%', height: '20%', alignItems: 'center', justifyContent: 'center', flexDirection: "row", flex: 0.5, marginTop: 15 }}>


          <View style={{ flexDirection: "column", alignItems: 'center', justifyContent: 'center', flex: 0.3, gap: 5, marginTop: 2 }}>

            <TouchableOpacity style={{ backgroundColor: '#393E46', width: '100%', height: '50%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }} onPress={handleFood}>

              <Icon name="utensils" size={30} color="aqua" />
              <StyledTitle fontSize={"18px"} title={"FOOD"} fontWeight={'bold'}></StyledTitle>

            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: '#393E46', width: '100%', height: '50%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }} onPress={handleExercises}>

              <Icon name="dumbbell" size={30} color="aqua" style="solid" />
              <StyledTitle fontSize={"18px"} title={"EXERCISES"} fontWeight={'bold'}></StyledTitle>
            </TouchableOpacity>
          </View>


          <View style={{
            backgroundColor: 'aqua', flex: 0.1, height: "15%", borderRadius: 150, alignItems: 'center', justifyContent: 'center', flexDirection: "column"
          }} />

          <View style={{ flexDirection: "column", alignItems: 'center', justifyContent: 'center', flex: 0.3, gap: 5, marginTop: 2 }}>

            <TouchableOpacity style={{ backgroundColor: '#393E46', width: '100%', height: '50%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }} onPress={handleSteps}>
              <Icon name="running" size={30} color="aqua" />
              <StyledTitle fontSize={"18px"} title={"STEPS"} fontWeight={'bold'}></StyledTitle>
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: '#393E46', width: '100%', height: '50%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }} onPress={handleDiscord}>
              <Icon name="discord" size={30} color="aqua" style="" />
              <StyledTitle fontSize={"18px"} title={"DISCORD"} fontWeight={'bold'}></StyledTitle>
            </TouchableOpacity>
          </View>

        </View>
      </>

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

export default Home
