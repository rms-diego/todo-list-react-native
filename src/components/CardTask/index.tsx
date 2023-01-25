import { useState } from "react";

import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Checkbox from "expo-checkbox";

import Trash from "../../assets/trash.svg";

import { COLORS } from "../../styles/colors";

interface Props {
  content: string;
  conclude: boolean;
  toggleConcludeTask: (content: string) => void;
  deleteTask: (content: string) => void;
}

export function CardTask({
  content,
  conclude,
  toggleConcludeTask,
  deleteTask,
}: Props) {
  const handleToggleConcludeTask = () => {
    toggleConcludeTask(content);
  };

  const isTaskConcludeColor = conclude ? COLORS["darkPurple"] : COLORS["blue"];

  const isTaskConcludeTextStyle = conclude
    ? styles.cardTaskTextConclude
    : styles.cardTaskTextTodo;

  const handleDeleteTask = () => deleteTask(content);

  return (
    <View style={styles.cardContainer}>
      <Checkbox
        color={isTaskConcludeColor}
        style={styles.cardCheckBox}
        value={conclude}
        onValueChange={handleToggleConcludeTask}
      />

      <Text style={isTaskConcludeTextStyle}>{content}</Text>

      <TouchableOpacity
        style={styles.cardButtonTrash}
        onPress={handleDeleteTask}
      >
        <Trash />
      </TouchableOpacity>
    </View>
  );
}
