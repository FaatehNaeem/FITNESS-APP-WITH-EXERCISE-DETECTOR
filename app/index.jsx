import { Redirect, router } from "expo-router";
import { Loader } from "../components";
import { useGlobalContext } from "../context/GlobalProvider";
import { StyledImageBackground, RoundedButton, StyledTitle } from '../styles'

const Welcome = () => {
  const { loading, isLogged } = useGlobalContext();

  if (loading === false && isLogged === true) {
    return (
      <Redirect href="/home" />
    );
  }

  return (
    <>
      <Loader isLoading={loading} />
      <StyledImageBackground source={{ uri: 'https://images.unsplash.com/photo-1528720208104-3d9bd03cc9d4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}>
        <StyledTitle top={"50px"} position={"absolute"} title="Fit Flow" />
        <StyledTitle top={"100px"} fontSize={"20px"} position={"absolute"} title="Your All in one Fitness Companion" />
        <RoundedButton title='Get Started' onPress={() => router.push('/sign-up')} marginTop={'10px'} />
      </StyledImageBackground>
    </>
  );
};

export default Welcome;
