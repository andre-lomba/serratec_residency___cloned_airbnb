import { StyleSheet } from "react-native";
import { COLORS } from "../Color";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 15,
    borderColor: `${COLORS.regularLightGrey}`,
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textView: {
    width: "72%",
  },
  title: {
    fontWeight: "600",
    fontSize: 16.5,
  },
  subtitle: {
    fontWeight: "400",
    fontSize: 16.3,
    opacity: 0.5,
  },
  checkView: {
    width: "28%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  checkBar: {
    backgroundColor: `${COLORS.regularLightGrey}`,
    width: "65%",
    height: 35,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 3,
  },
  checkBall: {
    backgroundColor: "#fff",
    height: 28,
    width: 28,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  check: {
    width: 15,
    height: 15,
  },
});
