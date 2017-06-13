import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import HotelAddress from './HotelAddress';
import Header from './header';

class HotelInside extends Component {
  state = { selectedHotel: {} };

  componentWillMount() {
    axios.get('http://swapi.co/api/people/')
      .then(response => {
        return (
          this.setState( { selectedHotel: response.data.results })
        )
      })
  }

  render() {
    console.log(this.state)

    return (
      <ScrollView>
        <Header imageSource={'http://www3.hilton.com/resources/media/hi/MIAMBHF/en_US/img/shared/full_page_image_gallery/main/HH_exterior03_3_675x359_FitToBoxSmallDimension_Center.jpg'} />
        <HotelAddress hotel={this.state.selectedHotel} style={styles.headerContentStyle} />
        <HotelAddress hotel={this.state.selectedHotel} />
      </ScrollView>
    );
  }
}

const styles = {
  headerContentStyle: {
    borderRadius: 5,
  }
}

export default HotelInside;