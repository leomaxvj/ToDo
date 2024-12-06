import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import InputText from '../../components/inputText';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../stackNavigation/type';
import { useNavigation } from '@react-navigation/native';

type NavigationProps = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProps>();

  const handleSubmit = () => {
    if (name === 'admin' && password === 'Admin@123') {
      navigation.navigate('HomeScreen');
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <InputText
        label="User Name"
        value={name}
        onChange={(text) => setName(text)}
      />
      <InputText
        label="Password"
        value={password}
        onChange={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 40,
  },
  logo: {
    width: '50%',
    height: '25%',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#13A49D',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
