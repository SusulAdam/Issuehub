import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
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

  const handleOnEndEached = () => {
    if (!reduxState.issuesError && !reduxState.issuesLoading) {
      dispatch(fetchIssuesPagination({page: reduxState.nextPage}));
    }
  };

  return (
    <>
      {reduxState.issuesLoading && <Loading />}
      {reduxState.issuesError && (
        <Error>
          <Text>Error- please reload app</Text>
        </Error>
      )}
      {!reduxState.issuesLoading && !reduxState.issuesError && (
        <FlatList
          data={reduxState.issues}
          keyExtractor={(_, index) => `key: ${index}`}
          onEndReached={handleOnEndEached}
          renderItem={item => {
            return (
              <View style={homeStyles.container}>
                <Text>{item.item.id}</Text>
                <Text>{item.item.title}</Text>
                <Text>{item.item.url}</Text>
              </View>
            );
          }}
        />
      )}
    </>
  );
};

export {HomeScreen};
