import {Platform, TextStyle, ViewStyle} from 'react-native';

type IssueItemStyle = {
  container: ViewStyle;
  title: TextStyle;
  buttonText: TextStyle;
  EvenItem: ViewStyle;
  OddItem: ViewStyle;
  button: ViewStyle;
};

export const issueItemStyle: IssueItemStyle = {
  container: {
    maxWidth: 300,
    borderRadius: 7,
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    color: '#ffffff',
  },
  EvenItem: {
    backgroundColor: '#5a5368',
  },
  OddItem: {
    backgroundColor: '#35313d',
  },
  buttonText: {
    width: '100%',
    textAlign: 'center',
    color: '#ffffff',
  },
  button: {
    borderRadius: 7,
    minWidth: '100%',
    height: 30,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 2,
    overflow: 'hidden',
    backgroundColor: Platform.select({
      ios: '#e15c5c',
      android: '#e15c5c',
    }),
  },
};
