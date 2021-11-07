import {TextStyle, ViewStyle} from 'react-native';

type IssueScreenStyle = {
  container: ViewStyle;
  title: TextStyle;
  state: TextStyle;
  description: TextStyle;
  textInput: TextStyle;
  scroll: ViewStyle;
  containerInput: ViewStyle;
  textButton: TextStyle;
  button: ViewStyle;
  contentContainerScroll: ViewStyle;
  keyBoard: ViewStyle;
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
    height: '100%',
    marginBottom: 30,
  },
  contentContainerScroll: {
    flexGrow: 1,
  },
  textInput: {
    backgroundColor: 'red',
    width: 200,
    height: 50,
    marginRight: 10,
    borderRadius: 20,
    paddingLeft: 10,
  },
  textButton: {
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  button: {
    borderRadius: 30,
    maxWidth: 100,
    backgroundColor: '#cccccc',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInput: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    marginBottom: 60,
  },
  keyBoard: {
    flex: 1,
  },
};
