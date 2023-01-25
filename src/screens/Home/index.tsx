import { useState } from "react";

import { Alert, View } from "react-native";
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
    const taskAlreadyExists = tasks.find(
      (task) => task.content === currentTask
    );

    if (taskAlreadyExists) {
      setCurrentTask("");

      return Alert.alert(
        "Essa Tarefa já existe",
        "Crie uma tarefa diferente daquelas que já foram criadas antes"
      );
    }

    const task = { content: currentTask.trim(), conclude: false };

    setTasks((prevState) => [...prevState, task]);
    setCurrentTask("");
  };

  const toggleConcludeTask = (content: string) => {
    const allTasks = tasks.map((task) => {
      if (task.content === content) {
        task.conclude = !task.conclude;
        return task;
      }

      return task;
    });

    setTasks([...allTasks]);
  };

  const deleteTask = (content: string) => {
    const allTasks = tasks.filter((task) => task.content !== content);

    setTasks([...allTasks]);
  };

  return (
    <View style={styles.container}>
      <Header />
      <NewTask
        currentTask={currentTask}
        changeCurrentTask={changeCurrentTask}
        addTask={addTask}
      />
      <Tasks
        tasks={tasks}
        toggleConcludeTask={toggleConcludeTask}
        deleteTask={deleteTask}
      />
    </View>
  );
}
