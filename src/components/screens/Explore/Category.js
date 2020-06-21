import React from 'react';
import {View, Text, Image} from 'react-native';

const Category = ({imageUri, name}) => {
  return (
    <View
      style={{
        height: 200,
        width: 200,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: '#dddddd',
      }}>
      <View style={{flex: 2}}>
        <Image
          source={{uri: imageUri}}
          style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
        />
      </View>
      <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
        <Text>{name}</Text>
      </View>
    </View>
  );
};
export default Category;
