import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles/GroupMeetupsList";

const GroupMeetupsList = ({ meetups }) => {
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Groups's meetups </Text>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView horizontal>
          {meetups.map((meetup, index) => (
            <View key={index} style={styles.meetupCard}>
              {console.log(meetup.title, meetup.description, meetup.group.name)}
              <View style={styles.topMeetupCard}>
                <Text style={styles.meetupTitle}>{meetup.title}</Text>
              </View>

              <View style={styles.buttomMeetupCard}>
                <Text style={styles.meetupDescription}>
                  {meetup.description}
                </Text>
                <Text style={styles.meetupGroupName}>{meetup.group.name}</Text>
                <Text style={styles.meetupDate}>Mar 12 9</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default GroupMeetupsList;
