import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Table from '../../components/table'
import InputText from '../../components/inputText';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../stackNavigation/type';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProps = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

const Home = () => {
  const navigation = useNavigation<NavigationProps>();
  const [todos, setTodos] = useState([
    { id: 1, todo: 'Task-1' },
  ]);
  const [todo, setTodo] = useState('');

  const addTask = () => {
    if (todo.trim() === '') {
      Alert.alert('Error', 'Task name cannot be empty!');
      return;
    }
    const isDuplicate = todos.some((task) => task.todo.toLowerCase() === todo.trim().toLowerCase());
    if (isDuplicate) {
      Alert.alert('Error', 'Task name already exists!');
      return;
    }

    setTodos([...todos, { id: todos.length + 1, todo: todo.trim() }]);
    setTodo('');
  };


  const handleActionPress = (id: number) => {
    setTodos(todos.filter((task) => task.id !== id));
  };

  const handleSubmit = () => {
    navigation.navigate('LoginScreen');

  };

  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>ToDo</Text>
      </View>
      <View style={styles.subcontainer}>
        <View style={styles.subcontainerRight}>
          <InputText
            label="Task Name"
            value={todo}
            onChange={(text) => setTodo(text)}
          />
        </View>
        <View style={styles.subcontainerLeft}>
          <TouchableOpacity style={styles.button} onPress={addTask}>
            <Text style={styles.buttonText}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tablecontainer}>
        <Table data={todos} onActionPress={handleActionPress} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>LogOut</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  titlecontainer: {
    width: "100%",
    height: "10%",
    textAlign: "center",

  },
  title: {
    textAlign: "center",
    height: "100%",
    color: "#13A49D",
    fontSize: 30,
    fontWeight: "600",
    paddingVertical: 20,
  },
  subcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 20
  },
  subcontainerRight: {
    width: "70%"
  },
  subcontainerLeft: {
    width: "30%",
    height: "75%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tablecontainer: {
    height: "50%",
    width: "100%"
  },
  button: {
    backgroundColor: '#13A49D',
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: "5%"
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
})