import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TabIcons from '../assets/TabIcons';
import { useSelector } from 'react-redux';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const { profile, loading } = useSelector((state: any) => state.data);

  return (
    <Tab.Navigator
        screenOptions={{
            headerShown : false,
        }}
    >
      <Tab.Screen name="Home" component={HomeScreen} 
        options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View>

                <Image 
                    source={TabIcons.home}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: focused ? '#000' : '#888'
                    }}      
                    />
                    {
                      focused ?
                      <View style={{height:5,width:5,backgroundColor:'red',alignSelf:'center',borderRadius:10 , marginBottom:-10}}/>
                      :
                      <View style={{height:5,width:5,backgroundColor:'transparent',alignSelf:'center',borderRadius:10, marginBottom:-10}}/>

                    }
                    </View>
            )
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} 
        options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View>

                <Image 
                    source={{ uri: profile?.avatar || 'https://via.placeholder.com/150' }}
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 12,
                      borderWidth: 1,
                      borderColor: focused ? '#000' : '#888',
                    }}      
                    />
                    {
                      focused ?
                      <View style={{height:5,width:5,backgroundColor:'red',alignSelf:'center',borderRadius:10,marginBottom:-10}}/>
                      :
                      <View style={{height:5,width:5,backgroundColor:'transparent',alignSelf:'center',marginBottom:-10}}/>

                    }
                    </View>
            )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({})