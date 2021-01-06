import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  SafeAreaView, ScrollView,
  TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: deviceHeight*.04,
  },
  button: {
    height: 50,
    alignItems: 'center',
    backgroundColor: '#add8e6',
  },
  scrollView: {
    marginHorizontal: 5,
  },
  text: {
    fontSize: 42,
  },
  fixToText: {
    flexDirection: 'row',

  },
  submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:40,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#68a0cf',
    overflow: 'hidden'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  imagen: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    backgroundColor: 'transparent',
},
  buttonText: {
    textAlign: 'center',
    padding: 15,
    color: 'white',
    width: 150,
    height: 50,
  },
  buttonConfig: {
    textAlign: 'center',
    padding: 15,
    color: 'white',
    width: 150,
    height: 50,
  },
  icon: {
    paddingTop: 50,
    marginLeft: 30,
    width: 30,
    height: 30,
    resizeMode: 'contain',

},

});

export default styles;