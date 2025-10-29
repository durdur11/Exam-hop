import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from '@react-navigation/native';
import { useContext, useState, createContext } from 'react';
import { darkStyles, lightStyles } from '@/styling/styles';
import SettingsScreen from './settings';
import HomeScreen from '@/app-example/app/(tabs)';
import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {}
});

export const useThemeMode = () => useContext(ThemeContext);


export default function TabLayout() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(prev => !prev);
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync(isDarkMode ? '#000000' : '#ffffff');
    NavigationBar.setButtonStyleAsync(isDarkMode ? 'light' : 'dark');
  }, [isDarkMode]);
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
    <Tabs
    screenOptions={{
    headerStyle: isDarkMode? { backgroundColor: 'black' } : { backgroundColor: 'white' },
    headerTintColor: isDarkMode? '#b9b9b9ff' : '#5e5e5eff',
    tabBarActiveTintColor: '#3683f7ff',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: isDarkMode? { backgroundColor: 'black' } : { backgroundColor: 'white' }
    }}>
      <Tabs.Screen
        name="index"
        options={{ 
          title: 'Home',
          tabBarIcon: ({color, size}) => (<Ionicons name="home" color={color} size={size+5}/>)}}
      />
      <Tabs.Screen
        name="quizzes"
        options={{ 
          title: 'Quiz',
          tabBarIcon: ({color, size}) => (<Ionicons name="globe-outline" color={color} size={size+5}/>)}}
      />
      <Tabs.Screen
        name="profile"
        options={{ 
          title: 'Profile', 
          tabBarIcon: ({color, size}) => (<Ionicons name="person-circle-sharp" color={color} size={size+5}/>)}}
      />
      <Tabs.Screen
        name="settings"
        options={{ 
          title: 'Settings',
          tabBarIcon: ({color, size}) => (<Ionicons name="cog-outline" color={color} size={size+5}/>)}}
      />
      <Tabs.Screen
        name="custom_quiz"
        options={{ 
          title: 'Custom quiz', 
          href: null }}
      />
      <Tabs.Screen
        name="mistakes"
        options={{ 
          title: 'Mistakes', 
          href: null }}
      />
    </Tabs>
    </ThemeContext.Provider>
  );
}
