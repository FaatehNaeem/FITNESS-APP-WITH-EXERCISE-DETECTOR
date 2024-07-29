import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FitnessCards from '../components/FitnessCards';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useGlobalContext } from '../context/GlobalProvider';

const HomeScreen = () => {
  const [showIcon, setShowIcon] = useState(false);
  const { calories, minutes, workout, } = useGlobalContext();

  return (
    <ScrollView showsVerticalScrollIndicator={false}
      style={{ marginTop: 0, flex: 1, backgroundColor:'#1F2544' }}>
      <View style={{ backgroundColor: "#1F2544",paddingTop: 40, paddingHorizontal: 20, height: 160, width: "100%" }}>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 50}}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>EXERCISES FOR YOU</Text>

          {/* Dark Mode  */}
          <TouchableOpacity onPress={() => setShowIcon(!showIcon)}>
            {showIcon ? <Ionicons name="sunny" size={24} color="white" /> : <Ionicons name="moon" size={24} color="aqua" /> }
          </TouchableOpacity>  
        </View>

        {/* Cards Row  */}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 30 }}>

          {/* First Card  */}
          <View style={styles.shadowCards}>
            <Text style={{ fontWeight: "bold", fontSize: 18,color:'white' }}>{calories.toFixed(2)}</Text>
            <Text style={{ color: 'aqua', fontWeight: "bold" }}>KCAL</Text>
          </View>

          {/* Second Card  */}
          <View style={styles.shadowCards}>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: 'white' }}>{workout}</Text>
            <Text style={{ color: 'aqua', fontWeight: "bold" }}>WORKOUTS</Text>
          </View>

          {/* Third Card  */}
          <View style={styles.shadowCards}>
            <Text style={{ fontWeight: "bold", fontSize: 18,color:'white' }}>{minutes}</Text>
            <Text style={{ color: 'aqua', fontWeight: "bold" }}>MINUTES</Text>
          </View>
        </View>
      </View>
      {/* Fitness Cards  */}
      <FitnessCards />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  shadowCards: {
    backgroundColor: "#393E46",
    width: "32%",
    height: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
});