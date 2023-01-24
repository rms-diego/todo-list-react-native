import { Text, View } from "react-native";
import { styles } from "./style";

import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
}
