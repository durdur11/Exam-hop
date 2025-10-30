import { View, Button } from 'react-native';
import { router } from 'expo-router';
import SwipeDetect from '../components/SwipeDetect';
import { useThemeMode } from './_layout';
import { darkStyles, lightStyles } from '../styling/styles';
import CustomButton from '../components/Custombutton';

type AppRoutes = '/index' | '/quizzes' | '/settings' | '/profile' | '/signUp';

export default function Index() {
  const { isDarkMode } = useThemeMode();
  const styles = isDarkMode ? darkStyles : lightStyles;

  return (
    <SwipeDetect
      SwipeLeft={() => router.push('/quizzes')}
      SwipeRight={() => router.push('/settings')}
    >
      <View style={styles.container}>
        <CustomButton title="sign up" onPress={() => router.push('/signUp')}></CustomButton>
        <CustomButton title="log in" onPress={() => router.push('/logIn')}></CustomButton>
      </View>
    </SwipeDetect>
  );
}
