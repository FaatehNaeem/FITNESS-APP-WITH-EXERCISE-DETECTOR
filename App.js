import React from 'react';
import LandingPage from './src/components/landingPage/landing-page'
import Login from './src/components/login/login';
import SignUp from './src/components/register/signup';
import BmiCalculator from './src/components/bmi/bmi';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalorieCalculator from './src/components/calorieCalculator/calorie-calculator';
import HomePage from './src/components/homePage/home-page';


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const App = () => {

  const stack = createNativeStackNavigator();

  return (
    <>
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
          <stack.Screen name='FIT FLOW' component={HomePage} />
        </stack.Navigator>
      </NavigationContainer>


       {/* <NavigationContainer>
        <Tab.Navigator
          activeColor='#00ADB5'
          inactiveColor='white'
          barStyle={{ backgroundColor: '#393E46' }}
        >

          <Tab.Screen name="HomePage" component={HomePage}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
              tabBarColor: 'red'
            }} />

          <Tab.Screen name="Login" component={Login}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="camera" color={color} size={26} />
              ),
              tabBarColor: 'blue'
            }}
          />

          <Tab.Screen name="Signup" component={SignUp}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="music" color={color} size={26} />
              ),
              tabBarColor: 'green'
            }}
          />

          <Tab.Screen name="Landing Page" component={LandingPage}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="email" color={color} size={26} />
              ),
              tabBarColor: 'yellow'
            }}
          />

        </Tab.Navigator>
      </NavigationContainer > */}

    </>
  )

}

export default App;




