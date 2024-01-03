import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './tabs'
import DrawerNavigator from './drawer'
import AuthStack from './auth'
import { useAuth } from '../featrures/auth/context'

const RootNavigator = () => {

  const { isAutenticated } = useAuth()
  return (
    <NavigationContainer>
      {isAutenticated ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default RootNavigator
