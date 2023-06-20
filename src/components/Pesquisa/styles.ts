import { StyleSheet } from "react-native";
import { COLORS } from "../Color";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 55,
    borderRadius: 30,
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 11,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 10,
  },
  lupa: {
    height: 20,
    width: 20,
  },
  lupaView: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "400",
    color: `${COLORS.strongGrey}`,
  },
  textView: {
    width: "75%",
  },
  filtro: {
    height: 12,
    width: 12,
  },
  filtoBorder: {
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    width: 35,
    borderWidth: 1,
    borderColor: `${COLORS.regularLightGrey}`,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  filtroView: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
});
