import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 327,
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: -30,
  },

  inputNewTask: {
    height: 54,
    flex: 1,
    backgroundColor: COLORS["gray-500"],
    color: COLORS["gray-100"],
    padding: 16,
    borderRadius: 6,
    marginRight: 4,
    borderColor: COLORS["gray-700"],
    fontSize: 18,
  },

  buttonAddTask: {
    width: 52,
    height: 52,
    backgroundColor: COLORS["darkBlue"],
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
