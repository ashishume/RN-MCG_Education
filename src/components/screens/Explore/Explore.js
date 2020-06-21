import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import Category from './Category';
import dataItem from '../../../assets/data.json';
import {TouchableOpacity} from 'react-native-gesture-handler';
// const {height, width} = Dimensions.get('window');

class Explore extends Component {
  componentDidMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  pressHandler = value => {
    console.log(value);
  };

  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#fff', paddingBottom: 30}}>
        <ScrollView scrollEventThrottle={16}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              paddingTop: 20,
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                paddingHorizontal: 20,
              }}>
              Explore courses
            </Text>

            <View style={{height: 200, marginTop: 20}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {dataItem.map((value, i) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.7}
                      key={i}
                      onPress={() => this.pressHandler(value)}>
                      <Category imageUri={value.image} name={value.text} />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Explore;
