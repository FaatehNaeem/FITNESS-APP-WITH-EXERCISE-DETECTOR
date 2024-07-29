import { useState } from "react";
import { Link } from "expo-router";
import { View, Alert, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { getCurrentUser, signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import { RoundedButton, StyledView, StyledTitle, Input } from '../../styles';
import { icons } from "../../constants";

const SignIn = () => {
  const { setUser, setIsLogged, setIsFirstTimeLogin } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setSubmitting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);
      setIsFirstTimeLogin(false);
      Alert.alert("Success", "User signed in successfully");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <StyledView>
      <StyledTitle title={"Welcome Back!"}></StyledTitle>
      <StyledTitle fontSize={"16px"} title={"Just another step away"}></StyledTitle>

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

      {isSubmitting ? (
        <ActivityIndicator size="large" color="aqua" />
      ) : (
      <RoundedButton title="Login" onPress={submit} isSubmitting={isSubmitting} />
      )}

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <StyledTitle top={"5px"} fontSize={"16px"} title={"Don't have an account?"}></StyledTitle>
        <Link
          href="/sign-up"
          style={{ color: "aqua", fontSize: 16, top: 5, position: 'relative', fontWeight: 'bold' }}
        >
          Signup
        </Link>
      </View>
    </StyledView>
  );
};

export default SignIn;
