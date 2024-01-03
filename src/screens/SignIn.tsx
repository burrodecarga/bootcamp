import { Button, StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { useAutentication } from '../featrures/auth/hooks/useAutentication'
import { sigIn } from '../featrures/auth/actions'

const SignIn = () => {
  const { sigIn } = useAutentication()

  const handleSignIn = () => {
    sigIn({ email: 'bdc@gmail', password: '12345' })
  }


  return (
    <View>
      <Text>SignIn</Text>
      <Button title='Login' onPress={handleSignIn} />
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({})
