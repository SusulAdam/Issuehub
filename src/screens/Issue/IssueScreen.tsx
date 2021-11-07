import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Loading, Error} from '../../components';
import {issueScreenStyle} from './IssueScreen.style';
import {AnimatedButton} from '../../components/animatedButton';

const IssueScreen = (): JSX.Element => {
  const reduxState = useSelector((state: RootState) => state.issues);

  let text = JSON.stringify(reduxState.selectedIssue?.body);

  if (reduxState.selectedIssue?.body.split('Version')[0]) {
    text = reduxState.selectedIssue?.body.split('Version')[0];
  }
  if (reduxState.selectedIssue?.body.split('Changelog')[0].split('##')[1]) {
    text = reduxState.selectedIssue?.body.split('Changelog')[0].split('##')[1];
  }

  const [textInputValue, onChangetextInputValue] = useState('');

  return (
    <>
      {reduxState.selectedIssueLoading && <Loading />}
      {reduxState.selectedIssueError && (
        <Error>
          <Text>Error- please reload app</Text>
        </Error>
      )}
      <KeyboardAvoidingView
        style={issueScreenStyle.keyBoard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={issueScreenStyle.container}>
          <Text style={issueScreenStyle.title}>
            {reduxState.selectedIssue?.title}
          </Text>
          <Text style={issueScreenStyle.state}>
            state: {reduxState.selectedIssue?.state}
          </Text>
          <ScrollView
            contentContainerStyle={issueScreenStyle.contentContainerScroll}
            style={issueScreenStyle.scroll}>
            <Text style={issueScreenStyle.description}>{text}</Text>
          </ScrollView>
          <View style={issueScreenStyle.containerInput}>
            <TextInput
              style={issueScreenStyle.textInput}
              placeholder="Comment"
              value={textInputValue}
              onChangeText={onChangetextInputValue}
            />
            <AnimatedButton style={issueScreenStyle.button} rippleColor="red">
              <Text style={issueScreenStyle.textButton}>Add</Text>
            </AnimatedButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export {IssueScreen};
