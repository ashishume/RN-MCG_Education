import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import BadgeType from '../../Shared/Badge';

class Home extends Component {
  render() {
    return (
      <View
        style={{
          padding: 7,
          width: this.props.width / 2 - 30,
          height: this.props.width / 2 - 30,
          borderWidth: 0.5,
          borderColor: '#dddddd',
        }}>
        <View style={{flex: 1}}>
          <Image
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover',
            }}
            source={{uri: this.props.image}}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
            paddingLeft: 10,
          }}>
        
          <BadgeType name={this.props.type} />
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>
            {this.props.name}
          </Text>
          <Text style={{fontSize: 12}}>{this.props.price}$</Text>
        </View>
      </View>
    );
  }
}
export default Home;
