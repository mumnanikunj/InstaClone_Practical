import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Root from './src/navigations/Root'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={'dark-content'} />
        <Root />
      </SafeAreaView>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})