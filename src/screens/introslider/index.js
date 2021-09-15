import React, { useState } from "react";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Block, Text, ImageComponent, input } from './src/components'
import ResponsiveImage from 'react-native-responsive-image';
import { useNavigation } from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const intro = () => {
  
  const [slides, setSlides] = useState([
    {
      key: 1,
      Image: require('./src/assets/icons/Pattern.png'),

    },
    {
      key: 2,
      Image: require('./src/assets/icons/Logo2.png'),
      title: 'Find your Comfort Food here',
      text: 'Here You Can find a chef or dish for every taste and color.Enjoy!',

    },
    {
      key: 3,
      Image: require('./src/assets/icons/Logo3.png'),
      title: 'Food Ninja is Where Your Comfort Food Lives',
      text: 'Enjoy a fast and smooth food delivery at your doostop'
    }
  ]);

  const renderscreen = ({ item }) => {
    return (
      <Block>
        <Block flex={0.9} middle center>
          <ResponsiveImage
          source={item.Image}
          style={{marginTop: hp(8), marginLeft: -5}}
          />
          <Text>
            {item.title}
          </Text>
          <Text>
            {item.text}
          </Text>
        </Block>
      </Block>
    )
  };
  return(
    <Block>
      <Carousel
        autoplay
        autoplayInterval={3000}
        useScrollView
        lockScrollWhileSnapping
        data={slides}
        renderItem={renderscreen}
        sliderWidth={wp(100)}
        itemWidth={wp(100)}
        layout={'default'}
        // enableSnap
        // onSnapToItem={(index) => setActiveSlide(index)}
      />
    </Block>
  )

}

export default intro;