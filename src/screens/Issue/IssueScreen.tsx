import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

const IssueScreen = (): JSX.Element => {
  const reduxState = useSelector((state: RootState) => state.issues);
  return (
    <View>
      <Text>{reduxState.selectedIssue?.title}</Text>
    </View>
  );
};

export {IssueScreen};
