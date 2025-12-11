// @ts-nocheck

/* 
MAD201 – Assignment 5
Author: Jennyfer Parmar
Student ID: A00201240
Date: 10/12/25
Description: Add a new task through form inputs.
*/

import { router } from "expo-router";
import React, { useContext, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { TaskContext } from "../context/TaskContext";

export default function AddTaskScreen() {
  const { addTask } = useContext(TaskContext)

  const [title, setTitle] = useState("")         // Input for title
  const [description, setDescription] = useState("") // Input for description

  const saveTask = () => {
    if (!title.trim()) {
      return    // Do not save empty title
    }

    addTask({
      id: Date.now().toString(),
      title,
      description,
      completed: false
    })
    router.back()   // Go back to previous screen
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Task Title"
        style={styles.input}
        onChangeText={setTitle}
        value={title}
      />

      <TextInput
        placeholder="Task Description"
        style={styles.input}
        onChangeText={setDescription}
        value={description}
      />

      <Button title="Save Task" onPress={saveTask} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    borderWidth: 1,
    padding: 12,
    marginVertical: 8,
    borderRadius: 6
  }
})
