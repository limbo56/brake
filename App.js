import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import TaskList from './components/TaskList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
})

export default function App() {
  return (
    <SafeAreaView
      style={styles.container}
      forceInset={Platform.OS === 'android' && { vertical: 'never' }}
    >
      <TaskList />
    </SafeAreaView>
  );
}