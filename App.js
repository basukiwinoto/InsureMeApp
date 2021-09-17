/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TBDView from './src/TBDView';
import CoverScreen from './src/CoverScreen';
import Question1 from './src/Question1';
import Question2 from './src/Question2';
import Question3 from './src/Question3';
import Recommendation from './src/Recommendation';

const Stack = createStackNavigator();
const horizontalAnimation = {
        cardStyleInterpolator: ({index, current, next, layouts: {screen}}) => {
            const translateX = current.progress.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [screen.width, 0, 0],
            });

            const opacity = next?.progress.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [1, 0, 0],
            });

            return {cardStyle: {opacity, transform: [{translateX}]}};
        },
    }

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cover"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Cover" component={CoverScreen} />
      <Stack.Screen name="Question1" component={Question1} />
      <Stack.Screen name="Question2" component={Question2} />
      <Stack.Screen name="Question3" component={Question3} />
      <Stack.Screen name="Recommendation" component={Recommendation} />
    </Stack.Navigator>
  );
}

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
