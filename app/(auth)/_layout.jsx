import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Loader } from "../../components";
import { useGlobalContext } from "../../context/GlobalProvider";
import { useEffect } from "react";

const AuthLayout = () => {
  const { loading, isLogged, isFirstTimeLogin } = useGlobalContext();

  useEffect(() => {
    if (!loading && isLogged) {
      if (isFirstTimeLogin) {
        router.replace("/bmi");
      } else {
        router.replace("/home");
      }
    }
  }, [loading, isLogged, isFirstTimeLogin]);

  return (
    <>
      <Stack>
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="bmi" options={{ headerShown: false }} />
        <Stack.Screen name="calorie-calculator" options={{ headerShown: false }} />
      </Stack>
      <Loader isLoading={loading} />
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default AuthLayout;
