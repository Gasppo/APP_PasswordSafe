import {Text, StyleSheet, View} from 'react-native';
import * as React from 'react';

const renderItem = ({item, index}) => {
    return(
    <View style={{backgroundColor: index % 2 === 0 ? '#E7E9E9' : 'white' }}>
      <View style={styles.casilla} >
      <Text style={styles.textoInsight}>{item.SystemName}</Text>
      <Text style={styles.textoInsight}> {item.AutoManagementFlag.toString()}</Text>
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
        borderColor: 'grey',
        flexDirection: 'row',
    }
});

export default renderItem