import React, { Component } from "react";
import { Text, View } from "react-native";
import { MeetupApi } from "../../../constants/api";
import styles from "./styles/HomeScreen";
import { LoadingScreen } from "../../commons";
import { GroupMeetupsList } from "./components";

const meetupApi = new MeetupApi();

class HomeScreen extends Component {
  static defaultProps = {
    meetupApi
  };
  state = {
    loading: false,
    meetups: []
  };

  async componentDidMount() {
    this.setState({
      loading: true
    });
    try {
      const meetups = await this.props.meetupApi.fetchGroupMeetups();

      this.setState({
        loading: false,
        meetups: meetups
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    if (this.state.loading) {
      return <LoadingScreen />;
    }

    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>Meetings</Text>
        </View>

        <View style={styles.buttomContainer}>
          <GroupMeetupsList meetups={this.state.meetups} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
