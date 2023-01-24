import { Text, View } from "react-native";
import { styles } from "./styles";

import { WithoutTasks } from "../WithoutTasks";

export function Tasks() {
  return (
    <View style={styles.container}>
      <View style={styles.headerTasks}>
        <View style={styles.headerContainerContentTasks}>
          <Text style={styles.headerCreatedTaskText}>Criadas</Text>
          <Text style={styles.headerCounterText}>0</Text>
        </View>

        <View style={styles.headerContainerContentTasks}>
          <Text style={styles.headerConcludeTaskText}>Concluídas</Text>
          <Text style={styles.headerCounterText}>0</Text>
        </View>
      </View>

      <WithoutTasks />
    </View>
  );
}
