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
import {View} from 'react-native';

import AppButton from './src/components/AppButton';

const App = () => {
  return (<View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }}>

    <AppButton title="Login" onPress={() => console.log('Tapped')}/>

  </View>);
};

export default App;
