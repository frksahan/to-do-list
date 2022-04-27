import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/task';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.tasksWrapper}>

        <Text style={styles.sectionTitle}>Bugünün İşleri</Text>

        <View style={styles.items}>
          <Task />
          <Task />
          <Task />
          <Task />
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  items: {},
}); 
