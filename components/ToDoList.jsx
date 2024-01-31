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


function ToDoList(props) {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Pressable>
            <View style={[styles.task, styles.completed]}>
              <Text style={styles.taskText}>Do laundry</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={[styles.task]}>
              <Text style={styles.taskText}>Go to gym</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={[styles.task, styles.completed]}>
              <Text style={styles.taskText}>Walk dog</Text>
            </View>
          </Pressable>
        </ScrollView>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Add a new task..." />
          <Button title="Add" />
        </View>
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