import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors";

export const styles = StyleSheet.create({
  withoutTasksContainer: {
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
    marginTop: 20,
    paddingVertical: 48,
    paddingHorizontal: 24,
    borderColor: COLORS["gray-400"],
    borderTopWidth: 2,
  },

  withoutTasksClipboard: {
    marginBottom: 16,
  },

  withoutTasksText: {
    color: COLORS["gray-300"],
  },

  withoutTasksTextTitle: {
    color: COLORS["gray-300"],
    fontWeight: "bold",
  },
});
