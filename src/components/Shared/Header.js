import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';

const Header = (props) => {
  return (
    <View style={styles.menuContainer}>
      <View style={styles.leftItem}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            props.navigation.toggleDrawer();
          }}>
          <Icon name="menu" type="material" color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.rightItem}>
        <Image
          style={{height: 50, width: 50}}
          source={require('../../assets/logo.jpg')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowOpacity: 1,
    shadowOffset: {
      height: 10,
    },
    elevation: 10,
    shadowRadius: 5,
  },
  leftItem: {marginLeft: 20},
  rightItem: {marginLeft: 300},
});
export default Header;
