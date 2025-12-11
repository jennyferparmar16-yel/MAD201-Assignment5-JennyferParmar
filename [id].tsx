// @ts-nocheck

/* 
MAD201 – Assignment 5
Author: Jennyfer Parmar
Student ID: A00201240
Date: 10/12/25
Description: Shows details for a selected task.
*/

import { router, useLocalSearchParams } from "expo-router";
import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TaskContext } from "../../context/TaskContext";

export default function TaskDetailScreen() {
  const { id } = useLocalSearchParams()           // route parameter
  const { tasks, toggleComplete, removeTask } = useContext(TaskContext)

  const taskId = Array.isArray(id) ? id[0] : id   // fix route array cases
  const task = tasks.find(t => t.id === taskId)   // find matching task

  if (!task) {
    return (
      <View style={styles.container}>
        <Text>Task not found.</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text>{task.description}</Text>
      <Text>Status: {task.completed ? "Completed" : "Pending"}</Text>

      <Button
        title="Toggle Complete"
        onPress={() => toggleComplete(task.id)}
      />

      <Button
        title="Delete Task"
        color="red"
        onPress={() => {
          removeTask(task.id)
          router.back()
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 10
  }
})
