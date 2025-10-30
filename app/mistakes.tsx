import { View, Text, ScrollView, Switch } from 'react-native';
import { useState, useContext } from 'react';
import { ThemeContext } from '@react-navigation/native';
import { darkStyles, lightStyles } from '../styling/styles';
import SwipeDetect from '../components/SwipeDetect';
import { useThemeMode } from './_layout';

export default function MistakesScreen(props: any) {
  const { isDarkMode, toggleTheme } = useThemeMode();
  const styles = isDarkMode ? darkStyles : lightStyles;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mistakes</Text>
    </View>
  );
}