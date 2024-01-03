import { View, Text, TextInput, StyleSheet, Platform, KeyboardAvoidingView, Touchable, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreens from '../screens/CategoriesScreens'
import ProductsScreen from '../screens/ProductsScreen'
import ProductScreen from '../screens/ProductScreen'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Search from '../components/icons/search'
import Test from '../components/icons/test'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

type ShopStackParamList = {
  Categories: undefined
  Products: undefined
  Product: undefined
}

const Stack = createNativeStackNavigator<ShopStackParamList>()
const isAndroid = Platform.OS === 'android'

const ShopStack = () => {
  const [search, setSearch] = useState<string>('')
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const inset = useSafeAreaInsets()


  const onChangeText = (text: string) => {
    setSearch(text)
  }

  const onFocus = () => {
    setIsFocus(true)
  }

  const onBlur = () => {
    setIsFocus(false)
  }

  return (
    <Stack.Navigator
      initialRouteName='Products'
      screenOptions={
        {
          headerStyle: {
            backgroundColor: '#8d93de'
          },
          headerBackTitleVisible: false,
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#fff',
            fontWeight: '600'
          }

        }
      }
    >
      <Stack.Screen name="Categories" component={CategoriesScreens}
      />
      <Stack.Screen name="Products" component={ProductsScreen}
        options={{
          header: () => (
            <KeyboardAvoidingView behavior={isAndroid ? 'height' : 'padding'} style={styles.keyboardView} >
              <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={[styles.header, { marginTop: inset.top }]} >
                  <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder='search'
                      onChangeText={onChangeText}
                      onBlur={onBlur}
                      onFocus={onFocus}
                      value={search}
                    />
                    <Search
                      style={styles.searchIcon}
                      color={isFocus ? '#000' : '#ccc'}
                      height={14}
                      width={14} />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          )
        }
        }
      />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator >
  )
}

export default ShopStack

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#8d93ce',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 60,
  },
  inputContainer: {
    width: 200,
    alignSelf: 'center'
  },
  input: {
    backgroundColor: '#fff',
    height: 36,
    borderRadius: 20,
    paddingHorizontal: 26
  },
  searchIcon: {
    position: 'absolute',
    top: isAndroid ? 9 : 9,
    left: 8,
  }
})

