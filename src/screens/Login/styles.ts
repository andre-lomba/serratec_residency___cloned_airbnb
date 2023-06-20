import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../components/Color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 18,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 23,
    fontWeight: "600",
    color: "#000",
  },
  close: {
    borderRadius: 15,
    width: 30,
  },
});
