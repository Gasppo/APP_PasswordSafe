import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import * as React from 'react';
import {newRequest} from '../src/actions/api/newRequests'



const renderItem = ({item, index}) => {
    
    return(
    <View style={{backgroundColor: index % 2 === 0 ? '#E7E9E9' : 'white' }}>
      <View style={styles.casilla} >
      <Text style={styles.textoInsight}>Cuenta: {item.AccountName}</Text>
      <Text style={styles.textoInsight}>Sistema: {item.SystemName}</Text>
      </View>
      <View style={styles.casilloBoton}>
          <TouchableOpacity style={styles.botonLogout} onPress={()=> newRequest(item)}>
          <Text style={styles.textoBoton}> New Request</Text>
          </TouchableOpacity>
      </View>
      </View>
    )
}

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
    casilloBoton: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        
    },
    botonLogout: {
        flex: 1,
        backgroundColor: "#94D58E",
        borderRadius: 0,
        height: 25, 
        alignItems: 'center',
      },
      textoBoton: {
          color: 'white',

      },
});

export default renderItem