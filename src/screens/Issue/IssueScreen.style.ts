import {TextStyle, ViewStyle} from 'react-native';

type IssueScreenStyle = {
  container: ViewStyle;
  title: TextStyle;
  state: TextStyle;
  description: TextStyle;
  scroll: ViewStyle;
  contentContainerScroll: ViewStyle;
};

export const issueScreenStyle: IssueScreenStyle = {
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  state: {
    marginTop: 2,
    textAlign: 'center',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  description: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14,
  },
  scroll: {
    maxHeight: '50%',
  },
  contentContainerScroll: {
    flexGrow: 1,
  },
};
