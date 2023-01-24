import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    width: 327,
    minHeight: 247,
    marginTop: 32,
    alignSelf: "center",
  },

  headerTasks: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerContainerContentTasks: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerCreatedTaskText: {
    color: COLORS["blue"],
    fontWeight: "700",
    fontSize: 18,
  },

  headerConcludeTaskText: {
    color: COLORS["purple"],
    fontWeight: "700",
    fontSize: 18,
  },

  headerCounterText: {
    marginLeft: 6,
    color: COLORS["gray-200"],
    backgroundColor: COLORS["gray-400"],
    fontSize: 17,
    fontWeight: "700",

    paddingHorizontal: 10,
    borderRadius: 10,
  },

  tasksContainer: {
    marginTop: 20,
  },

  scrollView: {
    marginBottom: 325,
  },
});
