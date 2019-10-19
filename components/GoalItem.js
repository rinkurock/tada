import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const GoalItem = props => {
  // const deleteGoalItem = deleteGoalItemId => {
  //   console.log(deleteGoalItemId);
  // };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View>
        <Text style={styles.listItem}>
          <Text>{props.title}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    marginVertical: 10
  }
});

export default GoalItem;
