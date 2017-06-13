import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';




const HotelAddress = ({ hotel }) => {

  const mapImg = 'http://www.criarsitewix.com/wp-content/uploads/2016/10/google-maps-api.jpg'

  const { name } = hotel
  const {
    headerContentStyle,
    headerTextStyle,
    ImageStyle,
    cardOverImage
  } = styles


  return (
    <Card style={cardOverImage}>

      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{name} Miami Beach</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={ImageStyle}
          source={{ uri: mapImg }}
        />
      </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20
  },
  headerTextStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000'
  },
  ImageStyle: {
    height: 120,
    flex: 1,
    width: null,
  },
  cardOverImage: {
    paddingTop: 500
  }
}

export default HotelAddress;