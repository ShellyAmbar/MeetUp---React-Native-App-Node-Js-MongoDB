import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  root: {
    flex: 1
  },
  titleContainer: {
    flex: 0.1,
    paddingHorizontal: "2.5%",
    paddingVertical: "2.5%",
    alignItems: "center"
  },
  title: {
    color: "$witeColor",
    fontSize: 25
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "$darkBlackBlue"
  },
  meetupCard: {
    height: 250,
    width: 175,
    margin: 7,
    padding: 4,

    backgroundColor: "$lightcyan"
  },
  topMeetupCard: {
    backgroundColor: "$darkBlackBlue",
    flex: 1,
    position: "relative"
  },
  meetupTitle: {
    fontSize: 20,
    position: "absolute",
    color: "$witeColor",
    left: "2%"
  },
  buttomMeetupCard: {
    flex: 0.9,
    backgroundColor: "$witeColor"
  },
  meetupDescription: {
    left: "2%",
    color: "$darkBlackBlue"
  },
  meetupGroupName: {
    left: "2%",
    color: "$deepskyblue"
  },
  meetupDate: {
    left: "2%",
    color: "$deepskyblue"
  }
});

export default styles;
