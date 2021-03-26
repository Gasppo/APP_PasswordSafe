import * as React from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {useSelector} from 'react-redux';
import renderItem from '../components/msysItem';
import {getMSYS} from '../src/actions/api/getAssets';

const deviceHeight = Dimensions.get('window').height;

const renderItemHeader = () => {
  return (
    <View style={{backgroundColor: '#253746'}}>
      <View style={styles.casilla}>
        <Text style={styles.textoCasilla}>System Name</Text>
        <Text style={styles.textoCasilla}>Auto Managed</Text>
      </View>
    </View>
  );
};

const ManagedSystems = ({navigation}) => {
  const state = useSelector((state) => state);

  return (
    <View style={{backgroundColor: '#E7E9E9'}}>
      <View style={styles.headerInsight}>
        <Text style={styles.textoInsight}> Managed Systems</Text>
      </View>

      <SafeAreaView style={styles.container}>
        {state.sistemas != 'N/A' && (
          <FlatList
            data={state.sistemas.slice(0, 50)}
            renderItem={renderItem}
            keyExtractor={(item) => item.ManagedSystemID.toString()}
            ListHeaderComponent={renderItemHeader}
            contentContainerStyle={{paddingBottom: 100}}
          />
        )}
        {state.sistemas === 'N/A' && (
          <TouchableOpacity style={styles.botonLogout} onPress={getMSYS()}>
            <Text style={{color: 'white'}}> Get Managed Systems </Text>
          </TouchableOpacity>
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
  },
  headerInsight: {
    marginTop: deviceHeight * 0.05,
  },
  textoInsight: {
    fontSize: 30,
    color: '#253746',
  },
  casilla: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
  },
  textoCasilla: {
    flex: 1,
    color: 'white',
    fontSize: 20,
  },

  botonLogout: {
    marginTop: 20,
    marginHorizontal: 100,
    alignItems: 'center',
    backgroundColor: '#253746',
    padding: 10,
  },
});

export default ManagedSystems;
