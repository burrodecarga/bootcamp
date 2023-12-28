import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/main'

type AboutScreenProps = NativeStackScreenProps<RootStackParamList,'About'>

const AboutScreens = ({navigation,route}:AboutScreenProps) => {
  const {name} = route.params || {}
  return (
    <View style={styles.container}>
        <Text style={styles.text}>ABOUT SCREEN BDC</Text>
        <Text style={styles.text}>{name}</Text>
      </View>
  )
}

export default AboutScreens

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  text:{
    fontSize:12,
    fontWeight:'bold',
    marginTop:10,
    color: 'blue'
  }
})
