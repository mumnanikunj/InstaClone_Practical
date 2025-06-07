import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

const StoryComponent = () => {
  const {store, loading} = useSelector((state: any) => state.data);
  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  type StoryItem = {
    id: number | string;
    avatar: string;
    username: string;
    isViewed: boolean;
  };

  const handleOpenStory = (index: number) => {
    setSelectedIndex(index);
    setVisible(true);
  };

  const RenderStories = ({item, index}: {item: StoryItem; index: number}) => {
    const borderColor = item.isViewed
      ? ['#dcdcdc', '#dcdcdc']
      : ['#C913B9', '#F9373F', '#FECD00'];
    return (
      <TouchableOpacity onPress={() => handleOpenStory(index)}>
        <View style={{alignItems: 'center', marginHorizontal: 8}}>
          <LinearGradient
            colors={borderColor}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={{padding: 3, borderRadius: 50}}>
            <View
              style={{backgroundColor: 'white', padding: 2, borderRadius: 50}}>
              <Image
                source={{uri: item.avatar}}
                style={{width: 60, height: 60, borderRadius: 30}}
              />
            </View>
          </LinearGradient>
          <Text style={{marginTop: 4, fontSize: 12}}>{item.username}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderSkeleton = () => (
    <SkeletonPlaceholder>
      <View style={styles.storyList}>
        {[...Array(5)].map((_, i) => (
          <View key={i} style={styles.skeletonItem}>
            <View style={styles.skeletonAvatar} />
            <View style={styles.skeletonText} />
          </View>
        ))}
      </View>
    </SkeletonPlaceholder>
  );

  return (
    <View>
      {loading ? (
        renderSkeleton()
      ) : Array.isArray(store) && store.length > 0 ? (
        <>
          <FlatList
            data={store}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => RenderStories({item, index})}
            keyExtractor={item => item.id.toString()}
          />

          <Modal visible={visible} transparent={false} animationType="fade">
            <View style={styles.modalContainer}>
              <TouchableOpacity
                onPress={() => setVisible(false)}
                style={styles.closeBtn}>
                <Text style={styles.closeText}>✕</Text>
              </TouchableOpacity>

              <ScrollView
                style={{flex: 1}}
                contentContainerStyle={{
                  flexGrow: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                minimumZoomScale={1}
                maximumZoomScale={10}
                pinchGestureEnabled={true}
                bounces={true}
                centerContent={true}>
                <Image
                  source={{uri: store[selectedIndex].avatar}}
                  style={styles.fullImage}
                  resizeMode="contain"
                />
              </ScrollView>
            </View>
          </Modal>
        </>
      ) : (
        <Text style={{padding: 16, textAlign: 'center'}}>
          No stories found.
        </Text>
      )}
    </View>
  );
};

export default StoryComponent;

const styles = StyleSheet.create({
  storyList: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  skeletonItem: {
    alignItems: 'center',
    marginRight: 12,
  },
  skeletonAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  skeletonText: {
    width: 60,
    height: 10,
    borderRadius: 4,
    marginTop: 6,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  fullImage: {
    width: width,
    height: height,
  },
  closeBtn: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
  },
  closeText: {
    fontSize: 30,
    color: 'white',
  },
});
