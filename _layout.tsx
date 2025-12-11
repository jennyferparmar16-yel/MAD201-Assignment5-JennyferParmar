/* 
MAD201 – Assignment 5
Author: Jennyfer Parmar
Student ID: A00201240
Date: 10/12/25
Description: Tab layout for All Tasks and Completed Tasks.
*/

import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "All Tasks" }}
      />

      <Tabs.Screen
        name="completed"
        options={{ title: "Completed" }}
      />
    </Tabs>
  )
}
