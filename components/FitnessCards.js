import { Image, Text, View, TouchableOpacity } from 'react-native';
import fitness from '../data/fitness';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FitnessCards = () => {
  const FitnessData = fitness;
  const navigation = useNavigation();


  return (
    <View style={{ marginTop: 80, marginHorizontal: 20, marginBottom: 20 }}>
      {FitnessData.map((item, id) => {
        console.log('Item Image URI:', item.image); 

        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('WorkoutScreen', {
                image: item.image,
                exercises: item.exercises,
                id: item.id,
              });
            }}
            style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}
            key={id}
          >
            {item.image ? (
              <Image
                style={{ width: '100%', height: 180, borderRadius: 12 }}
                source={{ uri: item.image }}
                onError={(e) => console.error('Image load error:', e.nativeEvent.error)}
              />
            ) : (
              <View style={{ width: '100%', height: 180, borderRadius: 12, backgroundColor: '#cccccc', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#666666' }}>Image not available</Text>
              </View>
            )}
            <Text style={{ position: 'absolute', color: 'white', fontSize: 16, fontWeight: 'bold', left: 20, top: 20 }}>{item.name}</Text>
            <MaterialCommunityIcons name="lightning-bolt" size={30} color="#dfbe04" style={{ position: 'absolute', bottom: 15, left: 15 }} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default FitnessCards;
