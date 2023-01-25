import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

import { WithoutTasks } from "../WithoutTasks";
import { CardTask } from "../CardTask";

import { TaskType } from "../../screens/Home";

interface Props {
  tasks: TaskType[];
  toggleConcludeTask: (content: string) => void;
  deleteTask: (content: string) => void;
}

export function Tasks({ tasks, toggleConcludeTask, deleteTask }: Props) {
  const allTasksQuantity = tasks.length;

  const allConcludesTasksQuantity = tasks.filter(
    (tasks) => tasks.conclude === true
  ).length;

  return (
    <View style={styles.container}>
      <View style={styles.headerTasks}>
        <View style={styles.headerContainerContentTasks}>
          <Text style={styles.headerCreatedTaskText}>Criadas</Text>
          <Text style={styles.headerCounterText}>{allTasksQuantity}</Text>
        </View>

        <View style={styles.headerContainerContentTasks}>
          <Text style={styles.headerConcludeTaskText}>Concluídas</Text>
          <Text style={styles.headerCounterText}>
            {allConcludesTasksQuantity}
          </Text>
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
                conclude={task.conclude}
                toggleConcludeTask={toggleConcludeTask}
                deleteTask={deleteTask}
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
