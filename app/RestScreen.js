import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons';

const RestScreen = () => {
  const navigation = useNavigation();
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(2);

  const startTime = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1)
    }, 1000)
  }

  useEffect(() => {
    startTime();

    //Cleanup Function
    return() => clearTimeout(timer);
  },)

  return (
    <SafeAreaView style={{ backgroundColor: '#1F2544',flex:1}}>
      <Image
        // resizeMode="contain"
        source={{
          uri: "https://steelsupplements.com/cdn/shop/articles/shutterstock_1204167769_1200x.progressive.jpg?v=1604683440",
        }}
        style={{ width: "100%", height: 460 }}
      />

      <Text style={{ fontSize: 30, fontWeight: "900", marginTop: 20, textAlign: "center", color:'white' }}>TAKE A BREAK!</Text>

      <Text style={{ fontSize: 35, fontWeight: "900", marginTop: 20, textAlign: "center",color:'white' }}><MaterialIcons name="timer" size={26} color="aqua" /> {timeLeft}</Text>
    </SafeAreaView>
  )
}

export default RestScreen