import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {homeStyles} from './HomeScreen.style';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Loading, Error} from '../../components';
import {fetchIssuesPagination} from '../../redux/IssuesSlice';

const HomeScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state: RootState) => state.issues);

  useEffect(() => {
    dispatch(fetchIssuesPagination({page: 1}));
  }, [dispatch]);

  return (
    <>
      {!reduxState.issuesError && reduxState.issuesLoading && <Loading />}
      {reduxState.issuesError && (
        <Error>
          <Text>Error- please reload app</Text>
        </Error>
      )}
      {!reduxState.issuesLoading && !reduxState.issuesError && (
        <View style={homeStyles.container}>
          <Text>{JSON.stringify(reduxState.issues[0])}</Text>
        </View>
      )}
    </>
  );
};

export {HomeScreen};
