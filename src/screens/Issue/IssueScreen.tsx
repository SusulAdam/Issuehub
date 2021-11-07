import React, {useEffect, useState} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const [state, setValue] = useState<{desc: string; url: string}[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      console.log(jsonValue);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const handleComment = () => {
    storeData({desc: textInputValue, url: reduxState.selectedIssue?.url});
    onChangetextInputValue('');
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      setValue(prevState => ({
        ...prevState,
        jsonValue,
      }));
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

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
          {/* {state !== [] &&
            state.map(item => {
              return <Text>{item.desc}</Text>;
            })} */}
          {/* //   <Text>{state.map((item)=> )}</Text> */}
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
            <AnimatedButton
              style={issueScreenStyle.button}
              rippleColor="red"
              onPress={handleComment}>
              <Text style={issueScreenStyle.textButton}>Add</Text>
            </AnimatedButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export {IssueScreen};
