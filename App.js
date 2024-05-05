import React from 'react';
import LandingPage from './src/components/landingPage/landing-page'
import SignUp from './src/components/register/signup'
import Login from './src/components/login/login'
import CalorieCalculator from './src/components/calorieCalculator/calorie-calculator'
import HomePage from './src/components/homePage/home-page';

import BmiCalculator from './src/components/bmi/bmi'
import Form from './src/components/form/form'
import Steps from './src/components/steps/steps'
import Diary from './src/components/diary/diary'

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      activeColor='#00ADB5'
      inactiveColor='white'
      barStyle={{ backgroundColor: '#393E46' }}
    >

      <Tab.Screen name="HomePage" component={HomePage}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-dashboard" color={color} size={26} />
          ),
          tabBarColor: 'red'
        }} />

      <Tab.Screen name="BmiCalculator" component={BmiCalculator}
        options={{
          tabBarLabel: 'BMI',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="human-male" color={color} size={26} />
          ),
          tabBarColor: 'blue'
        }}
      />

      <Tab.Screen name="Form" component={Form}
        options={{
          tabBarLabel: 'Form',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dumbbell" color={color} size={26} />
          ),
          tabBarColor: 'blue'
        }}
      />

      <Tab.Screen name="Steps" component={Steps}
        options={{
          tabBarLabel: 'Steps',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="run" color={color} size={26} />
          ),
          tabBarColor: 'green'
        }}
      />

      <Tab.Screen name="Diary" component={Diary}
        options={{
          tabBarLabel: 'Diary',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open-outline" color={color} size={26} />
          ),
          tabBarColor: 'yellow'
        }}
      />


    </Tab.Navigator>
  )
}

const App = () => {


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
          }
        }} />
        <stack.Screen name='Signup' component={SignUp} />
        <stack.Screen name='Login' component={Login} />
        <stack.Screen name='Lets get you fit' component={BmiCalculator} />
        <stack.Screen name='Calorie Calculator' component={CalorieCalculator} />
        <stack.Screen name='FIT FLOW' component={Home} options={{ headerShown: false }} />
      </stack.Navigator>
    </NavigationContainer>

  )

}

export default App;






