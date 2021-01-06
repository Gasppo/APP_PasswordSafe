import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  RefreshControl,
} from 'react-native';
import {SafeAreaView, withNavigation} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';
import {getREQs} from '../src/actions/api/getRequests';
import * as React from 'react';
import renderItem from '../components/reqItem';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const renderItemHeader = () => {
  return (
    <View style={{backgroundColor: '#253746'}}>
      <View style={styles.casilla}>
        <Text style={styles.textoCasilla}>Cuentas</Text>
      </View>
    </View>
  );
};

const Requests = ({navigation}) => {
  const state = useSelector((state) => state);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getREQs();
    withNavigation(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={{backgroundColor: '#E7E9E9'}}>
      <View style={styles.headerInsight}>
        <Text style={styles.textoInsight}> Requests activos</Text>
        <TouchableOpacity onPress={getREQs()}>
          <Image
            source={require('../src/img/refresh.png')}
            style={styles.refresh}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <SafeAreaView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {state.requests != 'N/A' && state.requests.length != 0 && (
          <View>
            <FlatList
              data={state.requests.slice(0, 50)}
              renderItem={renderItem}
              keyExtractor={(item) => {
                item.RequestID.toString();
              }}
              ListHeaderComponent={renderItemHeader}
              contentContainerStyle={{paddingBottom: 100}}
            />
          </View>
        )}
        {(state.requests == 'N/A' || state.requests.length == 0) && (
          <Text style={styles.textoInsightChico}> Sin requests abiertos </Text>
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
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  textoInsight: {
    fontSize: 30,
    color: '#253746',
  },
  textoInsightChico: {
    fontSize: 15,
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
  refresh: {
    width: 40,
    height: 40,
  },

  botonLogout: {
    marginTop: 20,
    marginHorizontal: 100,
    alignItems: 'center',
    backgroundColor: '#253746',
    padding: 10,
  },
});

export default Requests;
