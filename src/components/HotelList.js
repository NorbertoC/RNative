import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import HotelDetail from './HotelDetail';


class HotelList extends Component {
  state = { hotels: [] };

  componentWillMount() {
    axios.get('http://swapi.co/api/people/')
      .then(response => this.setState( { hotels: response.data.results }))
  }

  renderHotels(navigation) {
    return this.state.hotels.map((hotel) =>
      <HotelDetail key={hotel.name} hotel={hotel} navigation={navigation}/>
    );
  }


  render() {
    console.log(this.state)

    const { navigation } = this.props;

    return (
      <ScrollView>
        {this.renderHotels(navigation)}
      </ScrollView>
    );
  }
}

// HotelList.navigationOptions = {
//   title: 'home'
// }

export default HotelList;