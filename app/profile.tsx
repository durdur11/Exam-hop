import { View, Text, ScrollView, Switch } from 'react-native';
import { useState, useContext } from 'react';
import { ThemeContext } from '@react-navigation/native';
import { darkStyles, lightStyles } from '@/styling/styles';
import SwipeDetect from '@/components/SwipeDetect';
import { useThemeMode } from './_layout';
import { router } from 'expo-router';

export default function ProfileScreen(props: any) {
  const { isDarkMode, toggleTheme } = useThemeMode();
  const styles = isDarkMode ? darkStyles : lightStyles;
  return (
    <SwipeDetect SwipeLeft={() => router.push('/settings')} SwipeRight={() => router.push('/quizzes')}>
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </View>
    </SwipeDetect>
  );
}