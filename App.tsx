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
  console.log(Dimensions.get('screen'));

  console.log(useDimensions());

  const {landscape} = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: landscape ? '100%' : '30%',
      }}/>
    </SafeAreaView>
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
