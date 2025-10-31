import { View, Text, TextInput, Button, ScrollView, Switch } from 'react-native';
import { useState } from 'react';
import { useThemeMode } from './_layout';
import { darkStyles, lightStyles } from '../styling/styles';
import CustomButton from '../components/Custombutton';

export default function signUpScreen() {
  const { isDarkMode, toggleTheme } = useThemeMode();
  const styles = isDarkMode ? darkStyles : lightStyles;
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    user: '',
    email: '',
    birthday_d: '',
    birthday_m: '',
    birthday_y: '',
    password: '',
    confirmPassword: ''
  });
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (formData.password !== formData.confirmPassword) {

    }
  };
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.text}>First Name</Text>
      <TextInput
        style={styles.input}
        value={formData.first_name}
        placeholder="Enter first name"
        placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
        onChangeText={text => handleChange('first_name', text)
        }
      />

      <Text style={styles.text}>Last Name</Text>
      <TextInput
        style={styles.input}
        value={formData.last_name}
        placeholder="Enter last name"
        placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
        onChangeText={text => handleChange('last_name', text)}
      />

      <Text style={styles.text}>Username</Text>
      <TextInput
        style={styles.input}
        value={formData.user}
        placeholder="Enter your desired username"
        placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
        onChangeText={text => handleChange('user', text)}
      />

      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        value={formData.email}
        placeholder="Enter your email"
        placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
        onChangeText={text => handleChange('email', text)}
      />

      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.input}
        value={formData.password}
        placeholder="Enter password"
        placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
        onChangeText={text => handleChange('password', text)}
        secureTextEntry
      />

      <Text style={styles.text}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        value={formData.confirmPassword}
        placeholder="Confirm password"
        placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
        onChangeText={text => handleChange('confirmPassword', text)}
        secureTextEntry
      />


      <Text style={styles.text}>Birthday</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextInput
          placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
          style={[styles.input, { flex: 1, marginRight: 5 }]}
          value={formData.birthday_d}
          placeholder="DD"
          onChangeText={text => handleChange('birthday_d', text)}
        />
        <TextInput
        placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
          style={[styles.input, { flex: 1, marginHorizontal: 5 }]}
          value={formData.birthday_m}
          placeholder="MM"
          onChangeText={text => handleChange('birthday_m', text)}
        />
        <TextInput
        placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
          style={[styles.input, { flex: 1, marginLeft: 5 }]}
          value={formData.birthday_y}
          placeholder="YYYY"
          onChangeText={text => handleChange('birthday_y', text)}
        />
      </View>

      <CustomButton title="Sign Up" onPress={handleSubmit} />
    </ScrollView>
  );
}
