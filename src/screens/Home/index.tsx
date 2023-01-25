import { useState } from "react";

import { View } from "react-native";
import { styles } from "./styles";

import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import { Tasks } from "../../components/Tasks";

export interface TaskType {
  conclude: boolean;
  content: string;
}

export function Home() {
  const [currentTask, setCurrentTask] = useState<string>("");
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const changeCurrentTask = (text: string) => setCurrentTask(text);

  const addTask = () => {
    const task = { content: currentTask.trim(), conclude: false };

    setTasks((prevState) => [...prevState, task]);
    setCurrentTask("");
  };

  return (
    <View style={styles.container}>
      <Header />
      <NewTask
        currentTask={currentTask}
        changeCurrentTask={changeCurrentTask}
        addTask={addTask}
      />
      <Tasks tasks={tasks} />
    </View>
  );
}
