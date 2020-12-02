import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
// import img from './src/assets/react.png'

// var img = require('./src/assets/react.png');
const {height} = Dimensions.get('screen');

const App = () => {
  console.log('REQIURE', require('../src/assets/react.png'));
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text
        style = {{fontSize: 30 , fontWeight : "bold"}}
        >Hello React Native Web!!! - Minh Be Ti</Text>
        
        <Image
          source={{
            uri: 'https://www.flaticon.com/svg/static/icons/svg/919/919851.svg',
          }}
          style={{height: 200, width: 200}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
