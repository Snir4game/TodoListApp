import  React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task'; 


export default function App() {
  return (
    <View style={styles.container}>

        {/* Title  */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
        {/* Tasks */}
        <Task Text={'Task One'}/>
        <Task Text={'Task Two'}/>
        <Task Text={'Task Three'}/>
        <Task Text={'Task Four'}/>

        </View>

      </View>
      {/* Write a Task */}
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.WriteTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a Task'} />
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
  },
  items:{
    marginTop:30,
  }
});
