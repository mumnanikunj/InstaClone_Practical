import React, { useRef, useState } from 'react';
import { FlatList, Image, View, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

interface CarouselWithDotsProps {
  media: Array<{ uri: string }>;
}

const CarouselWithDots: React.FC<CarouselWithDotsProps> = ({ media }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event: { nativeEvent: { contentOffset: { x: number; }; }; }) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x / screenWidth
    );
    setActiveIndex(index);
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        {media.map((_, index) => (
          <View
            key={index}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: activeIndex === index ? '#333' : '#ccc',
              marginHorizontal: 4,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default CarouselWithDots;
