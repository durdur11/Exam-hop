import { router } from 'expo-router';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CustomButton from '../components/Custombutton';
import SwipeDetect from '../components/SwipeDetect';
import { darkStyles, lightStyles } from '../styling/styles';
import { addQuizSummary } from '../utils/stats';
import { useThemeMode } from './_layout';
const grammarQuestions = require('../assets/questions/gramatica_clasa4.json');
const mathQuestions = require('../assets/questions/matematica_cgitggigttglasa4.json');

export default function QuizzesScreen(props: any) {
  const { isDarkMode, toggleTheme } = useThemeMode();
  const styles = isDarkMode ? darkStyles : lightStyles;
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizType, setQuizType] = useState<'matematica' | 'romanian_grammar' | null>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null);

  function pickTenRandom(source: any[]): any[] {
    const indices = Array.from({ length: source.length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices.slice(0, 10).map(i => source[i]);
  }

  const currentQuestion = started && questions.length > 0 ? questions[currentIndex] : null;
  return (
    <SwipeDetect SwipeLeft={() => router.push('/profile')} SwipeRight={() => router.push('/settings')}> 
      <View style={[styles.container, {padding: 20}]}>
          <CustomButton isDarkMode={isDarkMode} title={started ? "Restart Quiz" : "Generate Quiz"} onPress={() => {
          const type = Math.random() < 0.5 ? 'matematica' : 'romanian_grammar';
          const allQuestions = type === 'matematica' ? mathQuestions : grammarQuestions;
          const picked = pickTenRandom(allQuestions);
          setQuizType(type);
          setQuestions(picked);
          setCurrentIndex(0);
          setScore(0);
          setSelectedOptionIdx(null);
          setStarted(true);
        }} />
        <View style={{ width: '100%'}}>
          {!started && (
            <Text style={[styles.text, { fontSize: 18}]}>Click "Generate Quiz" to start.</Text>
          )}
          {started && currentQuestion && (
            <>
              <Text style={[styles.text, { fontSize: 20, marginBottom: 16 }]}>
                {currentIndex + 1}. {currentQuestion.question}
              </Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {currentQuestion.options.map((opt: string, idx: number) => {
                  const isSelected = selectedOptionIdx === idx;
                  const isCorrect = currentQuestion.answerIndex === idx;
                  const showState = selectedOptionIdx !== null;

                  const baseBg = isDarkMode ? '#000000' : '#f2f4f7';
                  const bg = baseBg;
                  const border = showState
                    ? isCorrect
                      ? '#10b981'
                      : isSelected
                        ? '#ef4444'
                        : (isDarkMode ? '#444' : '#ddd')
                    : (isDarkMode ? '#444' : '#ddd');
                  const textColor = isDarkMode ? '#ffffff' : undefined;

                  return (
                    <TouchableOpacity
                      key={idx}
                      style={[buttonStyle, { backgroundColor: bg, borderColor: border, alignSelf: 'center'}]}
                      disabled={showState}
                      onPress={() => {
                        setSelectedOptionIdx(idx);
                        if (idx === currentQuestion.answerIndex) {
                          setScore(s => s + 1);
                        }
                      }}
                    >
                      <Text style={[styles.text, textColor ? { color: textColor } : null]}>{opt}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <View style={{ marginTop: 8 }}>
                {selectedOptionIdx !== null ? (
                  <CustomButton isDarkMode={isDarkMode} title={currentIndex === 9 ? 'Finish Quiz' : 'Next Question'} onPress={async () => {
                    if (currentIndex === 9) {
                      const answeredCount = currentIndex + 1; // since one is selected
                      const unansweredCount = Math.max(0, 10 - answeredCount);
                      await addQuizSummary(score, unansweredCount);
                      setStarted(false);
                    } else {
                      setCurrentIndex(i => i + 1);
                      setSelectedOptionIdx(null);
                    }
                  }} />
                ) : (
                  <Text style={[styles.text, { opacity: 0.7 }]}>Selectează un răspuns.</Text>
                )}
              </View>
              <Text style={[styles.text, { marginTop: 8 }]}>Scor: {score} / 10</Text>
            </>
          )}
        </View>
      </View>
    </SwipeDetect>
  );
}

const buttonStyle = {
  width: '48%',
  paddingVertical: 12,
  paddingHorizontal: 16,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: '#ddd',
  backgroundColor: '#f2f4f7',
  marginBottom: 12,
} as const;