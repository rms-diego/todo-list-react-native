import { View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import Plus from "../../assets/plus.svg";

import { COLORS } from "../../styles/colors";

export function NewTask() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={COLORS["gray-300"]}
        style={styles.inputNewTask}
      />

      <TouchableOpacity style={styles.buttonAddTask}>
        <Plus />
      </TouchableOpacity>
    </View>
  );
}
