import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";
import { COLORS } from "./src/styles/colors";

export default function App() {
  return (
    <>
      <Home />
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor={COLORS["gray-700"]}
      />
    </>
  );
}
