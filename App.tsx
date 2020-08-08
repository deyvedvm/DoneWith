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
import {Button, Image, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const handlePress = () => {
    console.log('Image tapped');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native!</Text>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Image
          source={{
            uri: 'https://picsum.photos/200/300',
            width: 200,
            height: 300,
          }}/>
      </TouchableWithoutFeedback>
      <Button title="Click me" onPress={() => console.log('Button clicked!')}/>
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
