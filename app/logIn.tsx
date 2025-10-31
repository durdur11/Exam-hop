import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { useThemeMode } from './_layout';
import { darkStyles, lightStyles } from '../styling/styles';
import CustomButton from '../components/Custombutton';

export default function LoginScreen() {
  const { isDarkMode } = useThemeMode();
  const styles = isDarkMode ? darkStyles : lightStyles;

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const inputStyle = {
    ...styles.input,
    color: isDarkMode ? '#fff' : '#000',
    borderColor: isDarkMode ? '#fff' : '#000',
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.text}>Email</Text>
      <TextInput
        style={inputStyle}
        placeholder="Enter your email"
        placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
        value={formData.email}
        onChangeText={text => handleChange('email', text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.text}>Password</Text>
      <TextInput
        style={inputStyle}
        placeholder="Enter password"
        placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
        secureTextEntry
        value={formData.password}
        onChangeText={text => handleChange('password', text)}
      />



      <View style={{ marginTop: 20 }}>
        <CustomButton title="Login" onPress={() => {
          console.log('Login data:', formData);
        }}/>
      </View>
    </ScrollView>
  );
}
