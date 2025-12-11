/* 
MAD201 – Assignment 5
Author: Jennyfer Parmar
Student ID: A00201240
Date: 10/12/25
Description: Root stack layout with TaskProvider and navigation.
*/

import { Stack } from "expo-router";
import React from "react";
import { TaskProvider } from "../context/TaskContext";

export default function RootLayout() {
  return (
    <TaskProvider> 
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }} // Tabs handle their own header
        />

        <Stack.Screen
          name="add-task"
          options={{ title: "Add Task" }} // Add Task screen
        />

        <Stack.Screen
          name="task/[id]"
          options={{ title: "Task Details" }} // Task details screen
        />

        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }} // Optional modal
        />
      </Stack>
    </TaskProvider>
  )
}
