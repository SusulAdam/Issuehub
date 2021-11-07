import React, {useCallback, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {homeStyles} from './HomeScreen.style';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Loading, Error} from '../../components';
import {fetchIssuesPagination, Issue} from '../../redux/IssuesSlice';

const HomeScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state: RootState) => state.issues);

  useEffect(() => {
    dispatch(fetchIssuesPagination({page: 1}));
  }, [dispatch]);

  const handleOnEndReached = () => {
    if (!reduxState.issuesError && !reduxState.issuesLoading) {
      dispatch(fetchIssuesPagination({page: reduxState.nextPage}));
    }
  };

  const keyExtractor = useCallback((_, index: number) => `key: ${index}`, []);

  const renderItem = useCallback(
    ({item}: {item: Issue}) => (
      <View style={homeStyles.container}>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
        <Text>{item.url}</Text>
      </View>
    ),
    [],
  );

  return (
    <>
      {reduxState.issuesLoading && <Loading />}
      {reduxState.issuesError && (
        <Error>
          <Text>Error- please reload app</Text>
        </Error>
      )}
      <FlatList
        data={reduxState.issues}
        keyExtractor={keyExtractor}
        onEndReached={handleOnEndReached}
        renderItem={renderItem}
      />
    </>
  );
};

export {HomeScreen};
