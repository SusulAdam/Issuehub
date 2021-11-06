import React from 'react';
import {Text, View} from 'react-native';
import {errorStyle} from './error.style';

type ErrorProps = {
  children: string;
};

const Error = ({children}: ErrorProps): JSX.Element => {
  return (
    <View style={errorStyle.container}>
      <Text style={errorStyle.text}>{children}</Text>
    </View>
  );
};

export {Error};
