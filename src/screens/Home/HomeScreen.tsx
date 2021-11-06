import React from 'react';
import {Text, View} from 'react-native';
import {homeStyles} from './HomeScreen.style';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Loading, Error} from '../../components';

const HomeScreen = (): JSX.Element => {
  const reduxState = useSelector((state: RootState) => state.issues);
  return (
    <>
      {!reduxState.loadingError && reduxState.loadingIssues && <Loading />}
      {reduxState.loadingError && (
        <Error>
          <Text>Error- please reload app</Text>
        </Error>
      )}
      {!reduxState.loadingIssues && !reduxState.loadingError && (
        <View style={homeStyles.container}>
          <Text>Home</Text>
        </View>
      )}
    </>
  );
};

export {HomeScreen};
