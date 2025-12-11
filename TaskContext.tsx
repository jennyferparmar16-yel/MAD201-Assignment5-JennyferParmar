/* 
MAD201 – Assignment 5
Author: Jennyfer Parmar
Student ID: A00201240
Date: 10/12/25
Description: This file provides global state management for tasks using Context API.
*/

import React, { createContext, ReactNode, useState } from "react";

export interface Task {
  id: string      // Unique ID for the task
  title: string   // Task title
  description: string // Task description
  completed: boolean  // Completion status
}

interface TaskContextType {
  tasks: Task[]                     // List of all tasks
  addTask: (task: Task) => void     // Function to add a task
  removeTask: (id: string) => void  // Function to remove a task
  toggleComplete: (id: string) => void // Function to toggle completion
}

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  toggleComplete: () => {},
})

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([])  // Global task list

  const addTask = (task: Task) => {
    setTasks([...tasks, task])   // Adds new task into list
  }

  const removeTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id))   // Removes task by ID
  }

  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t   // Toggles completion
      )
    )
  }

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, toggleComplete }}
    >
      {children}   // Makes context available to app
    </TaskContext.Provider>
  )
}
