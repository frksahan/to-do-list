import React, { useState } from 'react';
import { TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, ScrollView, TouchableHighlight } from 'react-native';
import Task from './components/task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Bugünün İşleri</Text>
          <View style={styles.items}>
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task text={item} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Mesajınızı Yazınız!'} value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BA55D3',
  },
  tasksWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 36,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    paddingTop: 10,
  },
  items: {
    marginTop: 15,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#D2B48C',
    borderRadius: 60,
    borderColor: '#000',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    backgroundColor: '#D2B48C',
    width: 50,
    height: 50,
    borderRadius: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,

  },
  addText: {
    paddingHorizontal: 15,
  },
}); 
