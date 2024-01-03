import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreens from '../screens/HomeScreens'
import AboutScreens from '../screens/AboutScreens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined
  About: { name: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={
      {
        headerStyle: {
          backgroundColor: 'sky',
        },
        headerTitleStyle: {
          color: '#91e25c'
        },
        headerTintColor: '#7de628'
      }

    }>
      <Stack.Screen name='Home' component={HomeScreens} options={{
        headerShown: true,

      }} />
      <Stack.Screen name='About' component={AboutScreens} options={{
        headerShown: true,
        headerTintColor: 'blue',
        title: 'Tongo About',

        //headerTitle:'Header Title'

      }} />
    </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})
