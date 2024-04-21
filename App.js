import React from 'react';
import LandingPage from './src/components/landingPage/landing-page'
import Login from './src/components/login/login';
import SignUp from './src/components/register/signup';
import BmiCalculator from './src/components/bmi/bmi';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalorieCalculator from './src/components/calorieCalculator/calorie-calculator';

const App = () => {
  
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <stack.Navigator>
    <stack.Screen name='First Page' component={LandingPage} options={{
    title: '',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }}}/>
    <stack.Screen name='Signup' component={SignUp}/>
    <stack.Screen name='Login' component={Login}/>
    <stack.Screen name='Lets get you fit' component={BmiCalculator}/>
    <stack.Screen name='Calorie Calculator' component={CalorieCalculator}/>
    
    </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
