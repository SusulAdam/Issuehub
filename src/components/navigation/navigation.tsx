import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, IssueScreen} from '../../screens';

const Stack = createNativeStackNavigator();

const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Issue Hub'}}
        />
        <Stack.Screen
          name="IssueScreen"
          component={IssueScreen}
          options={({route}) => ({
            // @ts-ignore TODO find right type
            title: route.params?.name ? route.params.name : 'IssueScreen',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {Navigation};
