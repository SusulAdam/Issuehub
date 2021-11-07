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

const HomeScreen = ({navigation}: {navigation: any}): JSX.Element => {
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

  const handleNavigateToIssueScreen = useCallback(
    (item: Issue) => {
      dispatch(fetchIssue({url: item.url}));
      navigation.navigate('IssueScreen', {
        name: `Issue number: ${item.number}`,
      });
    },
    [dispatch, navigation],
  );

  const renderItem = useCallback(
    ({item, index}: {item: Issue; index: number}) => (
      <>
        <IssueItem
          title={item.title}
          index={index}
          onPress={() => handleNavigateToIssueScreen(item)}
        />
      </>
    ),
    [handleNavigateToIssueScreen],
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
