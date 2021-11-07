import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Loading, Error} from '../../components';
import {issueScreenStyle} from './IssueScreen.style';

const IssueScreen = (): JSX.Element => {
  const reduxState = useSelector((state: RootState) => state.issues);

  console.log(reduxState.selectedIssue?.body.split('Version')[0]);

  let text = JSON.stringify(reduxState.selectedIssue?.body);

  if (reduxState.selectedIssue?.body.split('Version')[0]) {
    text = reduxState.selectedIssue?.body.split('Version')[0];
  }
  if (reduxState.selectedIssue?.body.split('Changelog')[0].split('##')[1]) {
    text = reduxState.selectedIssue?.body.split('Changelog')[0].split('##')[1];
  }

  return (
    <>
      {reduxState.selectedIssueLoading && <Loading />}
      {reduxState.selectedIssueError && (
        <Error>
          <Text>Error- please reload app</Text>
        </Error>
      )}
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
      </View>
    </>
  );
};

export {IssueScreen};
