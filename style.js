import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeareaview: {
    height: "100%",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 30,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 600,
    alignSelf: "center",
    paddingVertical: 20,
    paddingTop: 40,
  },
  inputContainer: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  inputBox: {
    width: "75%",
    borderWidth: 2,
    borderColor: "#ccc",
    height: 40,
    paddingHorizontal: 5,
    fontSize: 14,
  },
  actionBtnContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    width: "20%",
    display: "flex",
    justifyContent: "center",
    borderRadius: 10,
  },
  card: {
    height: "auto",
    minHeight: 50,
    maxHeight: 100,
    width: "100%",
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 10,
  },
  card_title: { fontSize: 16, maxWidth: "85%",minWidth:"85%" },
});

export default styles;
