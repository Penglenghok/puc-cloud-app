//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Profile from "../../components/Profile";
import { ScrollView } from "react-native-gesture-handler";

// create a component
export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Profile
          onTranscript={() => this.props.navigation.navigate("Transcript")}
        />
        <ScrollView />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});
