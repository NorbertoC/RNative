import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const HotelDetail = ({ navigation, hotel }) => {

  const hotelImg = 'https://exp.cdn-hotels.com/hotels/1000000/20000/18900/18816/216aa97a_z.jpg'
  const { name, height } = hotel
  const {
    headerContentStyle,
    headerTextStyle,
    rightContentStyle,
    priceStyle,
    ImageStyle
  } = styles

  const { navigate } = navigation;


  return (
    <Card>
      <CardSection>

          <Image
            style={ImageStyle}
            source={{ uri: hotelImg }}
          />

      </CardSection>

      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{name} Resort</Text>
        </View>
        <View style={rightContentStyle}>
          <Text>precio por noche</Text>
          <Text style={priceStyle}>ARS {height}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button onPress={() => navigate('HotelInside')} >Go to Details</Button>
      </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20
  },
  headerTextStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000'
  },
  rightContentStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    borderLeftWidth: 1,
    borderColor: '#ddd',
    paddingRight: 30,
    paddingLeft:10,
    marginTop: 30
  },
  ImageStyle: {
    height: 160,
    flex: 1,
    width: null,
  },
  priceStyle: {
    fontSize: 20
  }
}

export default HotelDetail;