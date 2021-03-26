const {TextInput} = require('react-native-gesture-handler');
import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {signinAPI} from '../src/actions/api/signin';

const LoginForm = () => {
  const [user, onChangeText] = React.useState('');
  return (
    <>
      <View>
        <View style={styles.casillaLogin}>
          <TextInput
            placeholder="Usuario"
            style={styles.textoLogin}
            onChangeText={onChangeText}
            value={user}
          />
        </View>
        <View style={styles.casillaLogin}>
          <TextInput
            placeholder="Clave"
            type="password"
            style={styles.textoLogin}
          />
        </View>
        <TouchableOpacity style={styles.botonLogout} onPress={signinAPI(user)}>
          <Text style={{color: 'white'}}> Iniciar Sesion </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  casillaLogin: {paddingVertical: 20, paddingLeft: 10},
  textoLogin: {fontSize: 20},
  botonLogout: {
    marginTop: 20,
    marginHorizontal: 100,
    alignItems: 'center',
    backgroundColor: '#253746',
    padding: 10,
  },
});

export default LoginForm;
