import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  isDarkMode?: boolean;
};

export default function CustomButton({ title, onPress, isDarkMode = false }: CustomButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isDarkMode ? styles.darkButton : styles.lightButton,
        pressed && styles.pressedButton,
      ]}
    >
      <Text style={isDarkMode ? styles.darkText : styles.lightText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lightButton: {
    backgroundColor: '#3683f7',
  },
  darkButton: {
    backgroundColor: '#1f6cd6',
  },
  pressedButton: {
    opacity: 0.7,
  },
  lightText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  darkText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});