import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signinAPI} from '../src/actions/api/signin';

const deviceHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {
  const state = useSelector((state) => state);

  return (
    <View style={{backgroundColor: '#E7E9E9'}}>
      <View style={styles.headerInsight}>
        <Text style={styles.textoInsight}> BeyondInsight </Text>
        <Text>Logged In: {JSON.stringify(state)}</Text>
        <Image
          source={require('../src/img/app-logo-default.png')}
          style={styles.logoBT}
          resizeMode="contain"
        />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.fixToText}>
          <TouchableOpacity
            style={styles.cajon}
            onPress={() => navigation.navigate('ManagedSystems')}>
            <Text style={styles.textoCajon}> Managed Systems </Text>
            <Image
              source={require('../src/img/ManagedSysIcon.png')}
              style={styles.logoCajon}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cajon}
            onPress={() => navigation.navigate('PasswordSafe')}>
            <Text style={styles.textoCajon}> Password Safe </Text>
            <Image
              source={require('../src/img/PsafeIcon.png')}
              style={styles.logoCajon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.fixToText}>
          <TouchableOpacity
            style={styles.cajon}
            onPress={() => navigation.navigate('Approve')}>
            <Text style={styles.textoCajon}> Solicitudes </Text>
            <Image
              source={require('../src/img/SolicitudesIcon.png')}
              style={styles.logoCajon}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cajon}
            onPress={() => navigation.navigate('Approve')}>
            <Text style={styles.textoCajon}> Aprobar </Text>
            <Image
              source={require('../src/img/ApproveIcon.png')}
              style={styles.logoCajon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.logout}>
        <TouchableOpacity style={styles.botonLogout} onPress={signinAPI()}>
          <Text style={{color: 'white'}}> Cerrar Sesion </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: deviceHeight * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fixToText: {
    flexDirection: 'row',
  },

  cajon: {
    flex: 1,
    padding: 40,
    borderWidth: 0,
    marginHorizontal: 2,
    marginVertical: 2,
    borderRadius: 2,
    backgroundColor: 'white',
  },
  textoCajon: {
    fontSize: 16,
    color: '#081826',
    textAlign: 'left',
    marginLeft: -30,
    marginTop: -30,
    width: 140,
  },
  headerInsight: {
    marginTop: deviceHeight * 0.05,
  },
  textoInsight: {
    fontSize: 30,
    color: '#253746',
  },
  logoBT: {
    width: 120,
    height: 40,
    marginLeft: 100,
    marginTop: -10,
  },
  logoCajon: {
    width: 240,
    height: 80,
    alignItems: 'center',
    marginLeft: -80,
    marginTop: 20,
  },

  botonLogout: {
    marginTop: 20,
    marginHorizontal: 100,
    alignItems: 'center',
    backgroundColor: '#253746',
    padding: 10,
  },
});

export default Home;
