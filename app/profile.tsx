import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import SwipeDetect from '../components/SwipeDetect';
import { darkStyles, lightStyles } from '../styling/styles';
import { getStats } from '../utils/stats';
import { useThemeMode } from './_layout';

export default function ProfileScreen(props: any) {
  const { isDarkMode, toggleTheme } = useThemeMode();
  const styles = isDarkMode ? darkStyles : lightStyles;
  const name = 'Victor Serban';
  const grade = 'Clasa a IV-a';
  const gmail = 'victor.serban@moisilbv.ro';
  const [quizzesCompleted, setQuizzesCompleted] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    (async () => {
      const s = await getStats();
      setQuizzesCompleted(s.quizzesCompleted);
      setCorrectAnswers(s.correctAnswers);
    })();
  }, []);

  return (
    <SwipeDetect SwipeLeft={() => router.push('/settings')} SwipeRight={() => router.push('/quizzes')}>
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <View style={{ width: '100%', marginTop: 12, padding: 16, borderWidth: 1, borderColor: '#ddd', borderRadius: 8 }}>
        <Text style={[styles.text, { fontSize: 16 }]}>Nume: {name}</Text>
        <Text style={[styles.text, { fontSize: 16, marginTop: 6 }]}>Clasă: {grade}</Text>
        <Text style={[styles.text, { fontSize: 16, marginTop: 6 }]}>Gmail: {gmail}</Text>
      </View>
      <View style={{ width: '100%', marginTop: 12, padding: 16, borderWidth: 1, borderColor: '#ddd', borderRadius: 8 }}>
        <Text style={[styles.text, { fontSize: 16 }]}>Quiz-uri finalizate: {quizzesCompleted}</Text>
        <Text style={[styles.text, { fontSize: 16, marginTop: 6 }]}>Răspunsuri corecte: {correctAnswers}</Text>
      </View>
    </View>
    </SwipeDetect>
  );
}