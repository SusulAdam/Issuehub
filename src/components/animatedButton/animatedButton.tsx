import React, {PropsWithChildren, useRef} from 'react';
import {
  Pressable,
  ViewStyle,
  PressableProps,
  Animated,
  Platform,
  View,
} from 'react-native';

type AnimatedButtonProps = PropsWithChildren<
  {
    style?: ViewStyle;
    rippleColor: string;
  } & PressableProps
>;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const AnimatedButton = (props: AnimatedButtonProps): JSX.Element => {
  const {rippleColor, children, style, ...pressableProps} = props;

  const animatedOpacity = useRef(new Animated.Value(1));
  const onPressIn = () => {
    if (Platform.OS === 'ios') {
      Animated.timing(animatedOpacity.current, {
        toValue: 0.6,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }

    if (pressableProps.onPressIn) {
      pressableProps.onPressIn;
    }
  };
  const onPressOut = () => {
    if (Platform.OS === 'ios') {
      Animated.timing(animatedOpacity.current, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }

    if (pressableProps.onPressOut) {
      pressableProps.onPressOut;
    }
  };

  return (
    <View
      style={[
        {overflow: style?.overflow},
        {borderRadius: style?.borderRadius},
      ]}>
      <AnimatedPressable
        {...pressableProps}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={[style, {opacity: animatedOpacity.current}]}
        android_ripple={{
          color: `${rippleColor}80`,
        }}>
        {children}
      </AnimatedPressable>
    </View>
  );
};

export {AnimatedButton};
