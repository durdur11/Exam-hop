import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs>
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
  );
}
