import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

import { icons } from "../../constants";
import { signOut } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import InfoBox from "../../components/InfoBox";

const Profile = () => {
  const { user, setUser, setIsLogged, Bmi, userCalories, setRepsData } = useGlobalContext();

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLogged(false);

    setRepsData({
      balance_leg_left: 0,
      balance_leg_right: 0,
      frontPushups: 0,
      sidePushups: 0,
      frontSquats: 0,
      sideSquats: 0,
      frontLunges: 0,
      sideLunges: 0,
      frontPlank: 0,
      sidePlank: 0,
    });


    router.replace("/sign-in");
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#1F2544' }]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={logout} style={styles.logoutButton}>
          <Image source={icons.logout} style={styles.logoutIcon} />
        </TouchableOpacity>

        <View style={styles.profilePictureContainer}>
          <Image source={{ uri: user?.avatar }} style={styles.profilePicture} resizeMode="cover" />
        </View>
      </View>

      <View style={styles.infoContainer}>
        <InfoBox title="Name" subtitle={user?.username} />
        <InfoBox title="Email" subtitle={user?.email} />
        <InfoBox title="Gender" subtitle={userCalories?.Gender} />
        <InfoBox title="Age" subtitle={userCalories?.age} />
        <InfoBox title="Weight" subtitle={Bmi?.weight} />
        <InfoBox title="Height" subtitle={Bmi?.height.toFixed(4)} />
        <InfoBox title="BMI Status" subtitle={Bmi?.bmi} />
        <InfoBox title="Activity Level" subtitle={userCalories?.ActivityLevel} />
        <InfoBox title="Weight Goal" subtitle={userCalories?.WeightGoal} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  logoutButton: {
    position: 'absolute',
    right: 16,
    top: 40,
  },
  logoutIcon: {
    width: 24,
    height: 24,
  },
  profilePictureContainer: {
    width: 64,
    height: 64,
    borderWidth: 1,
    borderColor: '#3a9ad9',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    width: '90%',
    height: '90%',
    borderRadius: 32,
  },
  infoContainer: {
    width: '100%',
    marginTop: 60,
    paddingHorizontal: 16,
  },
});

export default Profile;
