import React, {JSXElementConstructor, Key, ReactNode} from 'react';
import {Text, View} from 'react-native';
import {errorStyle} from './error.style';

interface ReactElement<
  P = any,
  T extends string | JSXElementConstructor<any> =
    | string
    | JSXElementConstructor<any>,
> {
  type: T;
  props: P;
  key: Key | null;
}

type ErrorProps = {
  children: ReactElement;
};

const Error = ({children}: ErrorProps): JSX.Element => {
  return (
    <View style={errorStyle.container}>
      {React.Children.map(children, child => {
        React.cloneElement(child, {
          style: [errorStyle.text, child.props.style],
        });
      })}
      <Text style={errorStyle.text}>{children}</Text>
    </View>
  );
};

export {Error};
