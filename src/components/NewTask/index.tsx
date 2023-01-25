import { View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import Plus from "../../assets/plus.svg";

import { COLORS } from "../../styles/colors";

interface Props {
  currentTask: string;
  changeCurrentTask: (text: string) => void;
  addTask: () => void;
}

export function NewTask({ currentTask, changeCurrentTask, addTask }: Props) {
  const handleChangeCurrentTask = (text: string) => changeCurrentTask(text);

  const handleAddTask = () => addTask();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={COLORS["gray-300"]}
        style={styles.inputNewTask}
        value={currentTask}
        onChangeText={handleChangeCurrentTask}
      />

      <TouchableOpacity style={styles.buttonAddTask} onPress={handleAddTask}>
        <Plus />
      </TouchableOpacity>
    </View>
  );
}
