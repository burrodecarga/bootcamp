import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './main'

const RootNavigator = () => {
  return (
    <NavigationContainer>
     <MainStack/>
    </NavigationContainer>
  )
}

export default RootNavigator
