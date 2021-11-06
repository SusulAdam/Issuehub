import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {loadingStyle} from './loading.style';

const Loading = (): JSX.Element => {
  return (
    <View style={loadingStyle.container}>
      <ActivityIndicator size="large" />
      <Text style={loadingStyle.text}>Loading please stay patient...</Text>
    </View>
  );
};

export {Loading};
