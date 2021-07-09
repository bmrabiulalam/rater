import React, { useState } from 'react';
import { Alert, FlatList, Keyboard, SafeAreaView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import AddTodo from './components/addtodo';
import Header from './components/header';
import TodoItem from './components/todoitem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text, key: Math.random().toString() }, ...prevTodos];
      })
    } else {
      Alert.alert("OOPS!", "Todos must be over 3 characters lond.", [
        { text: 'Got it', onPress: () => console.log('Alert Close.') }
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
    backgroundColor: '#128C7E',
  },
  list: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#128C7E'
  }
});
