import { useState } from "react";
import { Link } from "expo-router";
import { View, Alert, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { createUser } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import { RoundedButton, StyledView, StyledTitle, Input } from '../../styles';
import { icons } from "../../constants";

const SignUp = () => {
  const { setUser, setIsLogged, setIsFirstTimeLogin } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ username: "", email: "", password: "", confirmPassword: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };


  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "" || form.confirmPassword === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    if (form.password !== form.confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    setSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
      setUser(result);
      setIsLogged(true);
      setIsFirstTimeLogin(true);
      Alert.alert("Success", "User registered successfully");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <StyledView>
      <StyledTitle title={"Welcome Onboard!"}></StyledTitle>
      <StyledTitle fontSize={"16px"} title={"Let's get you started"}></StyledTitle>

      <Input
        placeholder="Enter your name"
        value={form.username}
        onChangeText={(text) => setForm({ ...form, username: text })}
      />

      <Input
        placeholder="Enter your email"
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
      />

      <View style={{ position: 'relative' }}>
        <Input
          placeholder="Enter your password"
          value={form.password}
          onChangeText={text => setForm({ ...form, password: text })}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 10,
            top: '60%',
            transform: [{ translateY: -10 }],
          }}
          onPress={togglePasswordVisibility}
        >
          <Image
            source={passwordVisible ? icons.eye : icons.eyeHide}
            style={{ width: 24, height: 24, tintColor: '#00ADB5' }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ position: 'relative' }}>
        <Input
          placeholder="Confirm password"
          value={form.confirmPassword}
          onChangeText={text => setForm({ ...form, confirmPassword: text })}
          secureTextEntry={!confirmPasswordVisible}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 10,
            top: '60%',
            transform: [{ translateY: -10 }],
          }}
          onPress={toggleConfirmPasswordVisibility}
        >
          <Image
            source={confirmPasswordVisible ? icons.eye : icons.eyeHide}
            style={{ width: 24, height: 24, tintColor: '#00ADB5' }}
          />
        </TouchableOpacity>
      </View>

      {isSubmitting ? (
        <ActivityIndicator size="large" color="aqua" />
      ) : (
      <RoundedButton title="Register" onPress={submit} isSubmitting={isSubmitting} />
      )}

      <View style={{ flexDirection: 'row' }}>
        <StyledTitle top={"5px"} fontSize={"16px"} title={"Already have an account ?"}></StyledTitle>
        <Link
          href="/sign-in"
          style={{ color: "aqua", fontSize: 16, top: 5, position: 'relative', fontWeight: 'bold' }}
        >
          Login
        </Link>
      </View>
    </StyledView>
  );
};

export default SignUp;
