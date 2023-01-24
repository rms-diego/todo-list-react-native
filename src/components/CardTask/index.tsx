import { useState } from "react";

import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Checkbox from "expo-checkbox";

import Trash from "../../assets/trash.svg";

import { COLORS } from "../../styles/colors";

export function CardTask() {
  const [isConclude, setIsConclude] = useState(false);

  const handleToggleConcludeTask = () => {
    setIsConclude((prevState) => !prevState);
  };

  const isTaskConcludeColor = isConclude
    ? COLORS["darkPurple"]
    : COLORS["blue"];

  const isTaskConcludeTextStyle = isConclude
    ? styles.cardTaskTextConclude
    : styles.cardTaskTextTodo;

  return (
    <View style={styles.cardContainer}>
      <Checkbox
        color={isTaskConcludeColor}
        style={styles.cardCheckBox}
        value={isConclude}
        onValueChange={handleToggleConcludeTask}
      />

      <Text style={isTaskConcludeTextStyle}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>

      <TouchableOpacity style={styles.cardButtonTrash}>
        <Trash />
      </TouchableOpacity>
    </View>
  );
}
