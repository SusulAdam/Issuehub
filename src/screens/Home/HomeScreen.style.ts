import {TextStyle, ViewStyle} from 'react-native';

type HomeStyles = {
  container: ViewStyle;
  textInputContainer: ViewStyle;
  textInput: TextStyle;
  buttonText: TextStyle;
  button: ViewStyle;
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
    height: 35,
    borderRadius: 25,
    fontSize: 17,
    paddingLeft: 25,
  },
  button: {
    width: '100%',
    marginTop: 10,
    height: 20,
    borderRadius: 25,
    maxWidth: 400,
    backgroundColor: '#6a4e8a',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
};
