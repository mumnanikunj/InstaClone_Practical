import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {ReactNode, useEffect} from 'react';
import CommonHeader from '../components/CommonHeader';
import colors from '../assets/Colors/colors';
import StoryComponent from '../components/StoryComponent';
import {useDispatch, useSelector} from 'react-redux';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {setLoading, setPosts, setProfile, setStore} from '../redux/dataSlice';
import axios from 'axios';
import AppIcons from '../assets/ICons';
import CarouselWithDots from '../components/CarouselWithDots';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {
    posts,
    store: storeData,
    profile,
    loading,
  } = useSelector((state: any) => state.data);
  console.log('Posts:', profile);
  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));

      try {
        const [postsRes, storeRes, profileRes] = await Promise.all([
          axios.get(
            'https://run.mocky.io/v3/10fdfa33-9196-4e37-90c6-317d38ad4e02',
          ),
          axios.get(
            'https://run.mocky.io/v3/268b9124-7986-4b3b-b23e-e73500ae78ca',
          ),
          axios.get(
            'https://run.mocky.io/v3/87f8a20f-38c2-4786-b0de-851a83fc5831',
          ),
        ]);

        // dispatch(setPosts(postsRes.data));
        // dispatch(setStore(storeRes.data));
        // dispatch(setProfile(profileRes.data));
      } catch (error) {
        console.error('API error:', error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  const renderSkeleton = () => (
    <SkeletonPlaceholder>
      {[...Array(5)].map((_, i) => (
        <View key={i} style={{marginBottom: 10, marginHorizontal: 16}}>
          <View style={{width: '90%', height: 60, borderRadius: 8}} />
        </View>
      ))}
    </SkeletonPlaceholder>
  );

  type Post = {
    createdAt: ReactNode;
    caption: ReactNode;
    likes: ReactNode;
    media: ArrayLike<any> | null | undefined;
    user: any;
    id: number;
    title: string;
    body: string;
  };

  const PostRender = ({item}: {item: Post}) => {
    return (
      <View style={styles.card}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 13,
          }}>
          <View style={styles.userHeader}>
            <Image
              source={{uri: item?.user?.avatar}}
              style={{width: 40, height: 40, borderRadius: 20}}
              resizeMode="cover"
            />
            <Text style={styles.title}>{item?.user?.username}</Text>
          </View>
          <Image
            source={AppIcons.MoreICon}
            style={{width: 14, height: 3, tintColor: colors.black}}
            resizeMode="contain"
          />
        </View>
        <FlatList
          data={item?.media}
          keyExtractor={(post, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item: post}) => (
            <View style={{marginHorizontal: 8}}>
              <Image
                source={{uri: post}}
                style={{width: 300, height: 390}}
                resizeMode="contain"
              />
            </View>
          )}
        />
        <View style={{marginBottom: 10, flexDirection:"row",justifyContent:'space-between',alignItems:'center'}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              paddingHorizontal: 13,
              width:'60%',
              justifyContent:'space-between',
            }}>
                <View style={{flexDirection: 'row'}}>
            <Image
              source={AppIcons.HeartIcon}
              style={{width: 20, height: 20, marginRight: 10}}
              resizeMode={'contain'}
            />
            <Image
              source={AppIcons.commentIcon}
              style={{width: 20, height: 20, marginRight: 10}}
              resizeMode={'contain'}
            />
            <Image
              source={AppIcons.ShareIcon}
              style={{width: 20, height: 20, marginRight: 10}}
              resizeMode={'contain'}
            />
            </View>
          <CarouselWithDots
            media={
              Array.isArray(item?.media)
                ? item.media.map((uri: string) => ({uri}))
                : []
            }
          />
          </View>
          <Image
            source={AppIcons.saveIcon}
            style={{
              width: 20,
              height: 20,
              marginRight: 10,
            }}
            resizeMode={'contain'}
          />
        </View>
        <View style={{paddingHorizontal: 13}}>
            
        <Text style={styles.likeText}>{item.likes} Likes</Text>
        <Text style={styles.usernameText}>{item.user.username} <Text style={styles.captionText}>{item.caption}</Text></Text>
        <Text>{item.createdAt}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CommonHeader title="" />

      {loading.posts ? (
        renderSkeleton()
      ) : (
        <FlatList
          data={posts}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{}}
          ListHeaderComponent={<StoryComponent />}
          renderItem={PostRender}
          showsVerticalScrollIndicator={false}
          style={{marginTop:5}}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  card: {
    marginBottom: 10,
  },
  title: {
    left: 8,
    fontSize: 15,
  },
  body: {
    fontSize: 13,
    color: '#555',
  },
  userHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText:{
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: 5,
  },
  usernameText:{
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.black,
    marginTop: 5,
  },
  captionText:{
    fontWeight:'400',
    fontSize: 14,
    color: colors.black,
    marginLeft: 5,
  }
});
