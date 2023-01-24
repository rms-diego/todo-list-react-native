import { Text, View } from "react-native";
import { styles } from "./styles";

import Clipboard from "../../assets/clipboard.svg";

export function WithoutTasks() {
  return (
    <View style={styles.withoutTasksContainer}>
      <Clipboard style={styles.withoutTasksClipboard} />
      <Text style={(styles.withoutTasksText, styles.withoutTasksTextTitle)}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.withoutTasksText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
