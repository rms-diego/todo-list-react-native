import { View } from "react-native";
import { styles } from "./styles";

import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import { Tasks } from "../../components/Tasks";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <NewTask />
      <Tasks />
    </View>
  );
}
