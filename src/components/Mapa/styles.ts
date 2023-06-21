import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 100,
    right: 138,
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
    width: 120,
    height: 55,
    backgroundColor: "rgba(31, 31, 31, 0.95)",
    borderRadius: 30,
  },
  image: {
    width:20,
    height:20,
    transform: [{ scaleX: -1 }],
  },
  text:{
    color:"#fff"
  }
});
