# MAD201-Assignment5-JennyferParmar
Task Manager App built with Expo Router, React Native, and Context API. Features include adding tasks, viewing details, marking tasks as completed, and separating completed and active tasks using bottom tab navigation.

Project Overview

This project is a Task Manager mobile application built using:
React Native
Expo Router
Context API
TypeScript

The application allows users to:
Add new tasks
View all active tasks
View completed tasks
Select a task and view its details
Mark a task as completed or uncompleted
Delete tasks

Project Structure
app/
 ├── _layout.tsx          # Root stack navigation + TaskProvider wrapper
 ├── add-task.tsx         # Add Task screen
 ├── modal.tsx            # Default Expo modal (not used but included)
 ├── task/
 │    └── [id].tsx        # Task Detail screen (dynamic routing)
 └── (tabs)/
       ├── _layout.tsx    # Bottom Tab Navigator
       ├── index.tsx      # All Tasks screen
       └── completed.tsx  # Completed Tasks screen

components/
 └── TaskItem.tsx         # Reusable component for rendering tasks in lists

context/
 └── TaskContext.tsx      # Global task state (Context API)

Features Implemented
Add Task
Users can create a new task with a title and description.

All Tasks Screen
Displays every task using a scrollable FlatList.

Completed Tasks Screen
Shows only tasks where completed === true.

Task Detail Screen
Displays:
Task title
Task description
Completion status
Button to mark complete/uncomplete
Button to delete task

Global State Management

All task data is stored in Context API, making it accessible across all screens.
Reusable Components

TaskItem.tsx is used on both the All Tasks and Completed screens.
Stack + Tab Navigation

Root stack handles screens such as Add Task and Task Details.
Bottom tabs switch between "All Tasks" and "Completed Tasks".

TypeScript Throughout
All project files use .tsx to follow assignment requirements.
