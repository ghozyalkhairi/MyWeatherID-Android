import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Splash from './src/screens/Splash'
import Home from './src/screens/Home'
import Location from './src/screens/Location'
import About from './src/screens/About'
import AppTheme from './src/theme'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
