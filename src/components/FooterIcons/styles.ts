import { StyleSheet } from "react-native";
import { COLORS } from "../Color";

export const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 45,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 7,
    opacity: 0.5,
    borderRadius: 30,
  },
  image: {
    width: 25,
    height: 25,
  },
  text: {
    fontSize: 10,
    fontWeight: "500",
  },
});
