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
  titleComment: TextStyle;
  singleComment: TextStyle;
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
    backgroundColor: '#1d1c1f',
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#ffffff',
  },
  state: {
    marginTop: 2,
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  description: {
    marginTop: 10,
    color: '#ffffff',
    fontSize: 14,
  },
  scroll: {
    maxHeight: '90%',
    height: '100%',
    marginBottom: 30,
    marginTop: 10,
  },
  contentContainerScroll: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  textInput: {
    maxWidth: 230,
    marginRight: 10,
    backgroundColor: 'rgba(255,255,255, 0.5)',
    width: '100%',
    height: 35,
    borderRadius: 25,
    fontSize: 17,
    paddingLeft: 25,
  },
  textButton: {
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#ffffff',
  },
  button: {
    borderRadius: 30,
    maxWidth: 100,
    backgroundColor: '#6a4e8a',
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
  singleComment: {
    color: '#ffffff',
    backgroundColor: '#35313d',
    marginVertical: 10,
    borderRadius: 30,

    padding: 10,
  },
  titleComment: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
  },
};
