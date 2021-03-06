import React, {useEffect, useState} from 'react';
import {
  Keyboard,
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
import {nanoid} from '@reduxjs/toolkit';

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

  const [state, setValue] = useState<{desc: string; url?: string}[]>([]);

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    try {
      const name = await AsyncStorage.getItem('@storage_Key');

      if (name !== null) {
        setValue([...JSON.parse(name)]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const save = async (name: string) => {
    const listOfTasks = [
      ...state,
      {desc: name, url: reduxState.selectedIssue?.url},
    ];
    try {
      await AsyncStorage.setItem('@storage_Key', JSON.stringify(listOfTasks));

      setValue(listOfTasks);
    } catch (e) {
      console.log(e);
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
        onTouchStart={Keyboard.dismiss}
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
            <Text style={issueScreenStyle.titleComment}>Comments:</Text>
            {state !== [] &&
              state
                .filter(item => item.url === reduxState.selectedIssue?.url)
                .map(item => (
                  <Text style={issueScreenStyle.singleComment} key={nanoid()}>
                    {item.desc}
                  </Text>
                ))}
          </ScrollView>
          <View style={issueScreenStyle.containerInput}>
            <TextInput
              placeholderTextColor="#ffffff"
              style={issueScreenStyle.textInput}
              placeholder="Comment"
              value={textInputValue}
              onChangeText={onChangetextInputValue}
            />
            <AnimatedButton
              style={issueScreenStyle.button}
              rippleColor="#6a4e8a'"
              onPress={() => save(textInputValue)}>
              <Text style={issueScreenStyle.textButton}>Add</Text>
            </AnimatedButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export {IssueScreen};
