import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {Issue} from '../../redux/IssuesSlice';
import {AnimatedButton} from '../animatedButton/animatedButton';
import {issueItemStyle} from './issueItem.style';

type IssueItemProps = Partial<Issue> & {index: number};

const IssueItem = (props: IssueItemProps): JSX.Element => {
  const {title, index} = props;

  const handleEvenOrOddItem = useMemo(() => {
    if (index % 2) {
      return issueItemStyle.EvenItem;
    } else {
      return issueItemStyle.OddItem;
    }
  }, [index]);

  return (
    <View style={[issueItemStyle.container, handleEvenOrOddItem]}>
      <Text style={issueItemStyle.title}>{title}</Text>
      <AnimatedButton rippleColor="blue" style={issueItemStyle.button}>
        <Text>i</Text>
      </AnimatedButton>
    </View>
  );
};

export {IssueItem};
