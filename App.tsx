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

import Card from './src/components/Card';

const App = () => {
  return <View style={
    {
      backgroundColor: '#f8f4f4',
      padding: 20,
      paddingTop: 100,
    }}>

    <Card
      title="Detroit Lions Jacket for sale!"
      subTitle="$100"
      image={require('./src/assets/beverly-hill-cop-detroit-lions-axel-foley-Jacket-1000x1000.jpg')}
    />

  </View>;
};

export default App;
