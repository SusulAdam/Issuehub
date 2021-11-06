import React from 'react';
import {Text, View} from 'react-native';
import {homeStyles} from './HomeScreen.style';

const HomeScreen = (): JSX.Element => {
  return (
    <View style={homeStyles.container}>
      <Text>Home</Text>
    </View>
  );
};

export {HomeScreen};
