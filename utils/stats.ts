import AsyncStorage from '@react-native-async-storage/async-storage';

const QUIZZES_COMPLETED_KEY = 'stats:quizzesCompleted';
const CORRECT_ANSWERS_KEY = 'stats:correctAnswers';

export type Stats = {
  quizzesCompleted: number;
  correctAnswers: number;
};

export async function getStats(): Promise<Stats> {
  try {
    const [qStr, cStr] = await Promise.all([
      AsyncStorage.getItem(QUIZZES_COMPLETED_KEY),
      AsyncStorage.getItem(CORRECT_ANSWERS_KEY),
    ]);
    return {
      quizzesCompleted: qStr ? parseInt(qStr, 10) : 0,
      correctAnswers: cStr ? parseInt(cStr, 10) : 0,
    };
  } catch {
    return { quizzesCompleted: 0, correctAnswers: 0 };
  }
}

export async function addQuizResult(correctCount: number): Promise<void> {
  const current = await getStats();
  const nextQuizzes = current.quizzesCompleted + 1;
  const nextCorrect = current.correctAnswers + Math.max(0, Math.floor(correctCount));
  await Promise.all([
    AsyncStorage.setItem(QUIZZES_COMPLETED_KEY, String(nextQuizzes)),
    AsyncStorage.setItem(CORRECT_ANSWERS_KEY, String(nextCorrect)),
  ]);
}

export async function resetStats(): Promise<void> {
  await Promise.all([
    AsyncStorage.setItem(QUIZZES_COMPLETED_KEY, '0'),
    AsyncStorage.setItem(CORRECT_ANSWERS_KEY, '0'),
  ]);
}


