import React, { Component } from 'react';
import { Picker, Text, View, Item } from 'react-native'


class DesayunoView extends Component {

  constructor(props) {
    super(props);

    data = ['solo la habitacion', 'Desayuno']
    this.state = {
      selected: 'habitacion'
    }
  }

  renderItem() {
    items=[];

    for (let item of data) {
      items.push(<Picker.Item key={item} label={item} value={item} />)
    }
    return items
  }

  render() {

    console.log(this.state)

    return (
      <View style={styles.dropdownStyle}>
        <Picker selectedValue={ this.state.selected }
                onValueChange={(value) => this.setState({ selected: value })}>
          {this.renderItem()}
        </Picker>
      </View>
    );
  }
}

const styles = {
  dropdownStyle: {
    backgroundColor: '#f8f0eb'
  }
}

export default DesayunoView;