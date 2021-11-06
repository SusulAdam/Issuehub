import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../screens';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {Navigation};
