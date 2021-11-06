import {TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../constants/theme';

type ErrorStyle = {
  container: ViewStyle;
  text: TextStyle;
};

export const errorStyle: ErrorStyle = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 25,
    color: COLORS.error,
  },
};
