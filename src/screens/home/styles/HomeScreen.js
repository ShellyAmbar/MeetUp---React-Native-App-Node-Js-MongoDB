import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "$darkBlackBlue"
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "$aquamarine"
  },
  buttomContainer: {
    flex: 0.8,
    backgroundColor: "$cyan"
  }
});

export default styles;
