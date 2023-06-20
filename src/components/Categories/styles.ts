import { StyleSheet } from "react-native";
import { COLORS } from "../../components/Color";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 8,
    marginEnd:30,
    borderBottomColor:"#000",
    opacity:0.5
  },
  icon: {
    width: 25,
    height: 25,
  },
  text: {
    fontSize: 10,
    fontWeight:"500"
  },
});
