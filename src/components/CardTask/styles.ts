import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors";

export const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    minHeight: 64,
    backgroundColor: COLORS["gray-400"],
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
  },

  cardTaskTextTodo: {
    flex: 1,
    flexWrap: "wrap",
    marginHorizontal: 8,
    color: COLORS["gray-100"],
    fontWeight: "400",
  },

  cardTaskTextConclude: {
    flex: 1,
    flexWrap: "wrap",
    marginHorizontal: 8,
    color: COLORS["gray-300"],
    fontWeight: "400",
    textDecorationLine: "line-through",
  },

  cardButtonTrash: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },

  cardCheckBox: {
    borderRadius: 8,
  },
});
