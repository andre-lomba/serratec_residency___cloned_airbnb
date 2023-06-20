import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 53,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    transitionProperty: "background-color, transform",
    transitionDuration: "0.8s",
  },
  button: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: 20,
    height: 20,
  },
  viewImage: {
    width: "9%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  viewText: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
