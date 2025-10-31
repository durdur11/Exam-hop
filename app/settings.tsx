import { View, Text, ScrollView, Switch } from 'react-native';
import { useState, useContext } from 'react';
import { ThemeContext } from '@react-navigation/native';
import { darkStyles, lightStyles } from '../styling/styles';
import { useThemeMode } from './_layout';
import SwipeDetect from '../components/SwipeDetect';
import { router } from 'expo-router';

export default function SettingsScreen(props: any) {
  const { isDarkMode, toggleTheme } = useThemeMode();
  return (
    <SwipeDetect SwipeLeft={() => router.push('/quizzes')} SwipeRight={() => router.push('/profile')}>
    <ScrollView style={isDarkMode? darkStyles.scrollContainer : lightStyles.container}>
      <View style={[isDarkMode? darkStyles.container : lightStyles.container, {paddingRight: 20}]}>
        <Text style={isDarkMode? darkStyles.text : lightStyles.text}>
          Color mode
        </Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme}></Switch>
      </View>
    </ScrollView>
    </SwipeDetect>
  );
}
