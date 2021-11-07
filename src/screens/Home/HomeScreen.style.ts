import {TextStyle, ViewStyle} from 'react-native';

type HomeStyles = {
  container: ViewStyle;
  textInputContainer: ViewStyle;
  textInput: TextStyle;
};

export const homeStyles: HomeStyles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#1d1c1f',
  },
  textInputContainer: {
    width: '100%',
    paddingHorizontal: 50,
    paddingBottom: 10,
    maxWidth: 400,
  },
  textInput: {
    backgroundColor: 'rgba(255,255,255, 0.5)',
    width: '100%',
    minHeight: 35,
    borderRadius: 25,
    fontSize: 17,
    paddingLeft: 25,
  },
};
