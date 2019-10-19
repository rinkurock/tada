import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
  };

  return (
    // <ScrollView>
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
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <View style={styles.listItem}>
              <Text>{itemData.item.value}</Text>
            </View>
          )}
        />
        {/* {courseGoals.map(goal => (
            <View key={goal} style={styles.listItem}>
              <Text>{goal}</Text>
            </View>
          ))} */}
      </View>
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
  },
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    marginVertical: 10
  }
});
