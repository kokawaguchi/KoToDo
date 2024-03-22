import React from 'react';
import {StyleSheet, Text} from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  return (
    <MainLayout>
      <Text style={styles.header}>Ko To Do App</Text>
      <Text style={styles.text}>Version 1.0</Text>
      <Text style={styles.text}>Date: Today</Text>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
  },
  text: {
    fontSize: 20,
  },
});

export default AboutScreen;
