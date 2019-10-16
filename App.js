import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={styles.layout}>
      <View style={styles.inputBox}>
        <TextInput
          placeholder="New task"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map(goal => (
          <Text>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    //flex: 1,
    backgroundColor: "#fff",
    padding: 100
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    width: "80%"
  },
  inputBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
