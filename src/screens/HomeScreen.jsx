import React, {useState} from 'react';

import {SafeAreaView} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import {Button} from 'react-native';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({navigation}) => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const handleAddTask = task => {
    setTasks([...tasks, task]);
  };

  return (
    <>
      <MainLayout>
        <SafeAreaView>
          <ToDoList tasks={tasks} />
          <ToDoForm addTask={handleAddTask} />
          <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
          />
        </SafeAreaView>
      </MainLayout>
    </>
  );
};

export default HomeScreen;
