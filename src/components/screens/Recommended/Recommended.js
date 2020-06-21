import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';
import Home from './Home';
const {height, width} = Dimensions.get('window');

import dataItem from '../../../assets/data.json';
class Recommended extends Component {
  componentDidMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, marginTop: 20, backgroundColor: '#fff'}}>
        <View style={{flex: 1}}>
          <ScrollView scrollEventThrottle={16}>
            <View style={{marginTop: 40}}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  paddingHorizontal: 20,
                }}>
                Recommended courses
              </Text>
              <View
                style={{
                  paddingHorizontal: 20,
                  marginTop: 10,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}>
                {dataItem.map((value, i) => {
                  return (
                    <Home
                      key={i}
                      width={width}
                      name={value.text}
                      image={value.image}
                      type="React"
                      price={82}
                      rating={4}
                    />
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default Recommended;

