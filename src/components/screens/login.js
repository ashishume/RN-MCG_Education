import React, {useState, useEffect} from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  StyleSheet,
  Text,
  ToastAndroid,
} from 'react-native';
import {AsyncStorage} from '@react-native-community/async-storage';

import {TouchableOpacity} from 'react-native-gesture-handler';
import LoginValidation from '../Utils/LoginValidation';
import {connect} from 'react-redux';
import {login} from '../../store/actions/auth';
const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const loginHandler = () => {
    const body = {email, password};
    const validate = LoginValidation(body);
    if (validate.email || validate.password) {
      setErrors(validate);
      return false;
    } else {
      setErrors('');
      props.login(body);
    }
  };
  // const storeData = async value => {
  //   try {
  //     await AsyncStorage.setItem('email', value);
  //   } catch (e) {
  //     ToastAndroid.show('Something went wrong', ToastAndroid.SHORT);
  //   }
  // };

  return (
    <ImageBackground
      source={require('../../assets/login.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Welcome back</Text>
          <Text style={styles.subHeaderText}>
            Enter your details to signin to your account
          </Text>
        </View>

        <View style={{marginBottom: 10}}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            onChangeText={email => setEmail(email)}
            style={styles.input}
            autoCompleteType="email"
            keyboardType={'email-address'}
            placeholderTextColor="#fff"
          />
          <Text style={styles.errorText}>{errors.email}</Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            onChangeText={password => setPassword(password)}
            style={styles.input}
            secureTextEntry={true}
            placeholderTextColor="#fff"
          />
          <Text style={styles.errorText}>{errors.password}</Text>
        </View>

        <TouchableOpacity
          onPress={() => loginHandler()}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = (state, ownProps) => {
  if (state.login.login.status) {
    ownProps.navigation.navigate('Dashboard');
  }
  return {
    loginState: state.login.login,
  };
};
export default connect(
  mapStateToProps,
  {login},
)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
  },
  headerContainer: {
    marginTop: 5,
    marginBottom: 15,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 15,
    color: '#fff',
  },
  label: {
    color: '#fff',
    marginBottom: -10,
  },
  input: {
    color: 'white',
    borderBottomWidth: 1,
    fontSize: 15,
    paddingLeft: 0,
    borderBottomColor: '#fff',
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 15,
    shadowColor: '#fff',
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 15,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  errorText: {
    color: 'white',
  },
});
