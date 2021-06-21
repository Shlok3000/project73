import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReadStoryScreen from './screens/ReadStoryScreen'
import WriteStoryScreen from './screens/WriteStoryScreen'
import { createAppContainer } from 'react-navigation'
import { createbottomTabNavigation } from 'react-navigation-tabs'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  ReadStory: { screen: ReadStoryScreen },
  WriteStory: { screen: WriteStoryScreen },
})

const AppContainer = createAppContainer
(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
