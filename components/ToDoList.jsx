import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
    TextInput,
    Button
  } from 'react-native';


function ToDoList({tasks}) {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
            {tasks.map((task, index) =>(
            <View style={[styles.task, styles.completed]}>
              <Text key={index} style={styles.taskText}>{task}</Text>
            </View>
            ))} 
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
