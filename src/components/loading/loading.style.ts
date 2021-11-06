import {TextStyle, ViewStyle} from 'react-native';

type LoadingStyle = {
  container: ViewStyle;
  text: TextStyle;
};

export const loadingStyle: LoadingStyle = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  text: {
    fontSize: 25,
  },
};