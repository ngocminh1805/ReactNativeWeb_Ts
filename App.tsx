import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';


const {height} = Dimensions.get('screen');

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text>Hello React Native Web!!! - Minh Be Ti</Text>
        <Image source = {require('./assets/react.png')} style = {{height: 200 , width: 200}}/>
        {/* <Image source = {} style = {{height: 200 , width: 200}}/> */}
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
