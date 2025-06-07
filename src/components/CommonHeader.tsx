import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../assets/Colors/colors';
import AppIcons from '../assets/ICons';

interface ICommonHeader {
  title: string;
}

const CommonHeader = (props: ICommonHeader) => {
  const insets = useSafeAreaInsets();
  const STATUSBAR_HEIGHT = insets.top;
  return (
    <View style={[styles.mainContainer, {paddingTop: STATUSBAR_HEIGHT}]}>
      {props.title ? (
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: colors.black,
            marginVertical: 10,
            textAlign: 'center',
          }}>
          {props.title}
        </Text>
      ) : (
        <Image
          source={AppIcons.IGIcon}
          style={{
            width: 104,
            height: 30,
          }}
          resizeMode={'contain'}
        />
      )}
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 13,
    // marginHorizontal: 13,
  },
});
