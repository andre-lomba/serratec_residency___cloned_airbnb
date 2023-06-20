import { StyleSheet } from "react-native";
import { COLORS } from "../Color";

export const styles = StyleSheet.create({
  inputsView: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.regularLightGrey,
  },
  focus: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#000",
  },
  box: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
  },
});
