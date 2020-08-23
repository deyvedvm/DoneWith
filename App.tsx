/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';
import {useDeviceOrientation, useDimensions} from '@react-native-community/hooks';

declare const global: {HermesInternal: null | {}};

const App = () => {
  // console.log(Dimensions.get('screen'));

  // console.log(useDimensions());

  const {landscape} = useDeviceOrientation();

  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}>

      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100,
      }}/>

      <View style={{
        backgroundColor: 'gold',
        // top: 20,
        // left: 20,
        width: 100,
        height: 100,
        // position: 'absolute',
      }}/>

      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100,
      }}/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
