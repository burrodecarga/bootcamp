import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, Platform } from 'react-native'
import React from 'react'
import Search from '../icons/search'

const isAndroid = Platform.OS === 'android'

const header = () => {

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
    top: isAndroid ? 9 : 11,
    left: 8,
  }
})


export default header
