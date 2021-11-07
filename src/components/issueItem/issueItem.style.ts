import {TextStyle, ViewStyle} from 'react-native';

type IssueItemStyle = {
  container: ViewStyle;
  title: TextStyle;
  EvenItem: ViewStyle;
  OddItem: ViewStyle;
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
};
