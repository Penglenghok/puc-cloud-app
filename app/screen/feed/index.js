import React, { Component } from "react";
import { Text, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import UnderConstruction from "../../components/UnderConstruction";
import NotYetSignIn from '../../components/NotYetSignIn'

export default class FeedScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NotYetSignIn/>
      </SafeAreaView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
