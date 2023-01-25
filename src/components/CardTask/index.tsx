import { useState } from "react";

import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Checkbox from "expo-checkbox";

import Trash from "../../assets/trash.svg";

import { COLORS } from "../../styles/colors";

interface Props {
  content: string;
}

export function CardTask({ content }: Props) {
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

      <Text style={isTaskConcludeTextStyle}>{content}</Text>

      <TouchableOpacity style={styles.cardButtonTrash}>
        <Trash />
      </TouchableOpacity>
    </View>
  );
}
