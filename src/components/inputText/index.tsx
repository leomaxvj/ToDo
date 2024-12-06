import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

type InputTextProps = {
  label: string;
  value: string;
  onChange: (text: string) => void;
};

const InputText: React.FC<InputTextProps> = ({ label, value, onChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder={`Enter ${label}`}
        placeholderTextColor="#13A49D"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width:"100%"
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#13A49D',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#13A49D',
  },
});

export default InputText;
