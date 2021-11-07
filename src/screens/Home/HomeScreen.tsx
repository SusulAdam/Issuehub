import React, {useCallback, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {homeStyles} from './HomeScreen.style';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Loading, Error, IssueItem} from '../../components';
import {
  fetchIssue,
  fetchIssuesPagination,
  Issue,
} from '../../redux/IssuesSlice';

const HomeScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state: RootState) => state.issues);

  const [mounted, setMounted] = React.useState(true);

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
    ({item, index}: {item: Issue; index: number}) => (
      <>
        <Text onPress={() => dispatch(fetchIssue({url: item.url}))}>CLICk</Text>
        <IssueItem title={item.title} index={index} />
      </>
    ),
    [dispatch],
  );

  const onScroll = useCallback(() => setMounted(false), []);

  return (
    <>
      {reduxState.issuesLoading && mounted && <Loading />}
      {reduxState.issuesError && (
        <Error>
          <Text>Error- please reload app</Text>
        </Error>
      )}
      <View style={homeStyles.container}>
        <Text> {JSON.stringify(reduxState.selectedIssue?.state)}</Text>
        <FlatList
          data={reduxState.issues}
          keyExtractor={keyExtractor}
          onEndReached={handleOnEndReached}
          renderItem={renderItem}
          onScroll={onScroll}
        />
      </View>
    </>
  );
};

export {HomeScreen};
