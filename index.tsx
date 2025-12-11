// @ts-nocheck

/* 
MAD201 – Assignment 5
Author: Jennyfer Parmar
Student ID: A00201240
Date: 10/12/25
Description: Shows list of all tasks.
*/

import { router } from "expo-router";
import React, { useContext, useEffect } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TaskItem from "../../components/TaskItem";
import { TaskContext } from "../../context/TaskContext";

export default function AllTasksScreen() {
  const { tasks } = useContext(TaskContext) // Get global tasks

  useEffect(() => {
    console.log("Number of tasks", tasks.length) // Simple useEffect example
  }, [tasks])

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onPress={() => router.push(`/task/${item.id}`)} // Go to details
          />
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push("/add-task")} // Navigate to Add Task
      >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: "#2196F3",
    borderRadius: 30,
    position: "absolute",
    bottom: 25,
    right: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  plus: {
    fontSize: 32,
    color: "#fff"
  }
})
