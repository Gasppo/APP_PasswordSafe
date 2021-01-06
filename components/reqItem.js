import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {checkinRequest} from '../src/actions/api/checkin';
import {getCreds} from '../src/actions/api/getCredentials';
import * as React from 'react';

const renderItem = ({item, index}) => {
  return (
    <View style={{backgroundColor: index % 2 === 0 ? '#E7E9E9' : 'white'}}>
      <View style={styles.casilla}>
        <Text style={styles.textoInsight}>{item.AccountName}</Text>
        <Text style={styles.textoInsight}>({item.SystemName})</Text>
      </View>
      <View style={styles.casilloBoton}>
        <TouchableOpacity
          style={styles.botonView}
          onPress={() => getCreds(item)}>
          <Text style={{color: 'white'}}> Ver Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.checkin}
          onPress={() => {
            checkinRequest(item);
          }}>
          <Text style={{color: 'white'}}> Checkin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textoInsight: {
    flex: 1,
    fontSize: 15,
    marginLeft: 5,
    color: '#253746',
  },
  casilla: {
    flex: 1,
    borderWidth: 0.5,
    borderRightWidth: 0,
    borderColor: 'grey',
    flexDirection: 'column',
    height: 60,
  },
  botonView: {
    flex: 1,
    backgroundColor: '#138E07',
    borderRadius: 3,
    height: 30,
    alignItems: 'center',
  },
  checkin: {
    flex: 1,
    backgroundColor: '#C70039',
    borderRadius: 3,
    height: 30,
    alignItems: 'center',
  },
  casilloBoton: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
});

export default renderItem;
