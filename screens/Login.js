import * as React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {StyleSheet} from 'react-native';
import LoginForm from '../components/loginForm';

const deviceHeight = Dimensions.get('window').height;

const Login = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.headerInsight}>
        <Text style={styles.textoInsight}> Please Login</Text>
      </View>
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerInsight: {
    marginTop: deviceHeight * 0.05,
  },
  textoInsight: {
    fontSize: 30,
    color: '#253746',
  },
});

export default Login;
