import React from 'react';
import { View } from 'react-native';


const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderRadius: 5,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }
}

export default Card;