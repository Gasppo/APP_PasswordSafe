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

const deviceHeight = Dimensions.get('window').height;

const Approve = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#E7E9E9'}}>
      <View style={styles.headerInsight}>
        <Text style={styles.textoInsight}> Aprobar solicitudes</Text>
      </View>
      <View style={styles.container}>
        <Text>Approver Page</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: deviceHeight * 0.1,
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

export default Approve;
