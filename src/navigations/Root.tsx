import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/Splash';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

const Root = () => {
  return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name={'Splash'} component={Splash} />
                <Stack.Screen name={'BottomTab'} component={BottomTab} />
            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Root

const styles = StyleSheet.create({})