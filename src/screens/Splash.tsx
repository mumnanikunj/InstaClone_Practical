import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  BottomTab: undefined;
};

const Splash = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

   useEffect(()=>{
    setTimeout(() => {
        navigation.navigate('BottomTab');
    }, 2000);
   },[])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Splash</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})