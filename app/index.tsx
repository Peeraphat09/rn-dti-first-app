import { StyleSheet, Text, View } from "react-native";
import {Link} from "expo-router";

export default function index() {
  return (
    <View>
      <Text style={styles.xx}>Welcome to SAU</Text>
      <Text style={styles.yy}>Hello</Text>
      <Link href={'/about'} style={styles.zz}>go to About</Link>
      <Link href={'/contact'} style={styles.zz}>go to Contact</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  xx: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
    color: "red",
  },
  yy: {
    color: "blue",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  zz: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
    borderRadius: 5,
    backgroundColor: "#ff0000",
    padding: 10,

  }
});
