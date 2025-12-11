// @ts-nocheck
/* 
MAD201 – Assignment 5
Author: Jennyfer Parmar
Student ID: A00201240
Date: 10/12/25
Description: Displays only completed tasks.
*/

import { router } from "expo-router";
import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import TaskItem from "../../components/TaskItem";
import { TaskContext } from "../../context/TaskContext";

export default function CompletedTasksScreen() {
  const { tasks } = useContext(TaskContext) // Get all tasks

  const completed = tasks.filter(t => t.completed) // Keep only completed ones

  return (
    <View style={styles.container}>
      <FlatList
        data={completed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onPress={() => router.push(`/task/${item.id}`)} // Open details
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12
  }
})
