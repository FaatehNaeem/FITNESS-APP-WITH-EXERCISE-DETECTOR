import { useNavigation, useRoute } from '@react-navigation/native'
import { Image, ScrollView, TouchableOpacity, View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useGlobalContext } from '../context/GlobalProvider';

const WorkoutScreen = () => {
  const route = useRoute();
  const exercises = route.params.exercises;
  const navigation = useNavigation();
  const { completed, setCompleted } = useGlobalContext();
  
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#1F2544", marginTop: 0 }}
      >
        <Image
          style={{ width: "100%", height: 200, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, marginBottom: 20 }}
          source={{ uri: route.params.image }}
        />

        {
          exercises && exercises.map((item, index) => (
            <TouchableOpacity style={{ marginVertical: 12, marginHorizontal: 18, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} key={index}>
              <View style={{ flexDirection: "row", alignItems: "center", }}>
                <Image style={{ width: 90, height: 90, }} source={{ uri: item.image }} />

                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold",color:'aqua' }}>{item.name}</Text>
                  <Text style={{ marginTop: 4, fontSize: 16, color: "white" }}>{item.sets}</Text>
                </View>
              </View>

              {
                completed.includes(item?.name) ? (<AntDesign name="checkcircle" size={24} color="aqua" />) : null
              }
            </TouchableOpacity>
          ))
        }
      </ScrollView>

      <TouchableOpacity onPress={() => {
        navigation.navigate("FitScreen", { exercises: route.params.exercises }) 
        setCompleted([]);
      }} style={{ backgroundColor: "#00ADB5", padding: 12, marginHorizontal: 15, marginVertical: 20, borderRadius: 50}}>
        <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 20 }}><MaterialCommunityIcons name="whistle" size={24} color="white" /> START</Text>
      </TouchableOpacity>
    </>
  )
}

export default WorkoutScreen