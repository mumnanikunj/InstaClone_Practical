import { Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../assets/Colors/colors'
import CommonHeader from '../components/CommonHeader'
import { useSelector } from 'react-redux'
import AppIcons from '../assets/ICons'

const screenWidth = Dimensions.get('window').width;
const imageSize = screenWidth / 3;
const ProfileScreen = () => {
  const { profile, loading } = useSelector((state: any) => state.data);
  console.log('Profile:', profile);
  return (
    <View style={styles.container}>
      <CommonHeader title={profile?.displayName || 'Profile'} />
      <View style={styles.innerView}>
        <View style={styles.HeaderView}>
          <ImageBackground 
            source={{uri: profile?.avatar || 'https://via.placeholder.com/150'}}
            style={{ width: 80, height:80, justifyContent: 'flex-end' }}
            imageStyle={{ borderRadius:80 }}
          >
            <View style={styles.ImageBgView}>
              <Image 
                source={AppIcons.plusIcon}
                style={{ width: 24, height: 24, }}
                resizeMode={'contain'}
              />
            </View>
          </ImageBackground>
          <View style={styles.USerDetail}>
            <View style={{ alignItems:"center"}}>
            <Text>{profile.stats.posts}</Text>
            <Text style={{fontWeight:'400',fontSize:12}}>Posts</Text>
            </View>
             <View style={{ alignItems:"center"}}>
            <Text>{profile.stats.followers}</Text>
            <Text style={{fontWeight:'400',fontSize:12}}>Followers</Text>
            </View>
             <View style={{ alignItems:"center"}}>
            <Text>{profile.stats.following}</Text>
            <Text style={{fontWeight:'400',fontSize:12}}>Following</Text>
            </View>
          </View>
        </View>

    <Text style={{paddingHorizontal:13,marginTop:8,fontWeight:600}}>{profile.displayName}</Text>
    <Text style={{paddingHorizontal:13,marginBottom:16}}>{profile.bio}</Text>
           <FlatList
      data={profile?.mediaGrid || []}
      keyExtractor={(item, index) => index.toString()}
      numColumns={3}
      renderItem={({ item }) => (
        <View style={styles.imageWrapper}>
          <Image source={{ uri: item }} style={styles.image} />
        </View>
      )}
    />
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.white
  },
  innerView:{
    flex: 1,
  },
  HeaderView:{
    paddingHorizontal: 16,
    flexDirection:"row",
    justifyContent:'space-between',
  },
  ImageBgView:{
    backgroundColor:colors.primary,
    alignSelf:'flex-end',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    borderWidth:1,
    borderColor:colors.white
  },
  USerDetail:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    flex: 1,
  },
  imageWrapper: {
    width: imageSize,
    height: imageSize,
    padding: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})