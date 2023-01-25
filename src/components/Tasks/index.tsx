import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

import { WithoutTasks } from "../WithoutTasks";
import { CardTask } from "../CardTask";

import { TaskType } from "../../screens/Home";

interface Props {
  tasks: TaskType[];
}

export function Tasks({ tasks }: Props) {
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

      {tasks.length > 0 ? (
        <View style={styles.tasksContainer}>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            {tasks.map((task, index) => (
              <CardTask
                key={`${task.content} ${index}`}
                content={task.content}
              />
            ))}
          </ScrollView>
        </View>
      ) : (
        <WithoutTasks />
      )}
    </View>
  );
}
