import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button, Alert } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const cancelAddGoalModal = () => {
    setIsAddMode(false);
  };

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };
  const removeGoalHandler = goalId => {
    console.log(goalId);
    Alert.alert(
      "Want to remove the goal",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => confirmGoalRemove(goalId) }
      ],
      { cancelable: false }
    );
  };

  const confirmGoalRemove = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  return (
    // <ScrollView>
    <View style={styles.layout}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visitable={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelAddGoalModal}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  layout: {
    //flex: 1,
    backgroundColor: "#fff",
    padding: 100
    //alignItems: 'center',
    //justifyContent: 'center',
  }
});
