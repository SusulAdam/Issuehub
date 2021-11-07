import {Platform, TextStyle, ViewStyle} from 'react-native';

type IssueItemStyle = {
  container: ViewStyle;
  title: TextStyle;
  EvenItem: ViewStyle;
  OddItem: ViewStyle;
  button: ViewStyle;
};

export const issueItemStyle: IssueItemStyle = {
  container: {
    maxWidth: 350,
    borderRadius: 50,
    paddingHorizontal: 25,
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,

    marginBottom: 10,
  },
  title: {
    fontSize: 20,
  },
  EvenItem: {
    backgroundColor: '#cccccc',
  },
  OddItem: {
    backgroundColor: '#a3a0a0',
  },
  button: {
    width: 40,
    borderRadius: 30,
    height: 40,
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
      ios: 'red',
      android: 'rgb(255,55,66)',
    }),
  },
};
