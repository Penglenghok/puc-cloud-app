import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView,SafeAreaView } from "react-native";
import PrimaryHeader from "../../components/PrimaryHeader";
import RnTranscriptTerm from "../../components/RnTranscriptTerm";
import { LAYOUT } from "../../modules";
import RnTranscriptHeader from "../../components/RnTranscriptHeader";
import _styles from "../../styles";
export default class TranscriptScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={styles.navigation}>
          <View style={_styles.flex1}>
            <PrimaryHeader goBack={() => this.props.navigation.goBack()} />
          </View>
          <View style={styles.titleLable}>
            <Text style={styles.title}>Computer Science</Text>
          </View>
          <View style={_styles.flex1} />
        </View>
        <RnTranscriptHeader />
        <ScrollView >
          <RnTranscriptDetail />
          <RnTranscriptDetail />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  navigation: {
    paddingHorizontal: LAYOUT.BODY_HORIZONTAL,
    flexDirection: "row",
    alignItems: "center"
  },
  titleLable: {
    flex: 2,
    alignItems: "center"
  },
  title: {
    fontSize: 18,
    fontWeight: "700"
  }
});
