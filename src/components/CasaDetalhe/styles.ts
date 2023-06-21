import { StyleSheet } from "react-native";
import { COLORS } from "../Color";

export const styles = StyleSheet.create({
  conteiner: {
    gap: 10,
  },

  heartTouchable: {
    position: "absolute",
    right: 15,
    top: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 23,
    height: 23,
    backgroundColor: "transparent",
    zIndex: 1,
  },

  heart: {
    width: "100%",
    height: "100%",
  },

  image: {
    width: 324.5,
    height: 324.5,
    borderRadius: 12,
  },

  star: {
    width: 15,
    height: 15,
  },

  stressedText: {
    fontSize: 17,
    fontWeight: "500",
  },

  locNotaView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  nota: {
    fontSize: 15,
    fontWeight: "400",
  },

  starNotaView: {
    width: 55,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  regularText: {
    fontSize: 17,
    fontWeight: "400",
    opacity: 0.5,
  },
});
