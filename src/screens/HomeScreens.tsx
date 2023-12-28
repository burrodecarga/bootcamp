import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/main'

type HomeScreenProps = NativeStackScreenProps<RootStackParamList,'Home'>

const HomeScreens = ({navigation}:HomeScreenProps) => {
  return (
      <View style={styles.container}>
        <Text>HOME SCREEN MODIFICADO</Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate('About',{name:'EDWIN HENRIQUEZ'})}
        style={styles.touch}
        ><Text style={styles.text}>
          Go to About
        </Text>
        </TouchableOpacity>
      </View>
  )
}

export default HomeScreens

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  touch:{
    paddingVertical:6,
    paddingHorizontal:10,
    backgroundColor:'blue',
    borderRadius:10,
    marginVertical:12,
  },
  text:{
    fontSize:16,
    color:'#fff',
    fontWeight:'bold'

  }
})
