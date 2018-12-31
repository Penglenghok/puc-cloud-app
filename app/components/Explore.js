import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { ICONS, COLORS, LAYOUT } from "../modules";

export default (Explore = () => {
  return (
    <View style={styles.explore}>
      <Text style={styles.exploreText}>Admissions</Text>
      <View style={styles.matBox}>
        <View style={styles.matGrid}>
          <TouchableOpacity style={styles.matButton}>
            <Image style={styles.matIcon} source={ICONS.REGISTER_TESTING} />
            <Text style={styles.matButtonText}>Register Testing</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.matGrid}>
          <TouchableOpacity style={styles.matButton}>
            <Image style={styles.matIcon} source={ICONS.SPEL_PROGRAM} />
            <Text style={styles.matButtonText}>PUC SPEL Online</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.matGrid}>
          <TouchableOpacity style={styles.matButton}>
            <Image style={styles.matIcon} source={ICONS.SHORT_PROGRAM} />
            <Text style={styles.matButtonText}>Short Courses</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.matGrid}>
          <TouchableOpacity style={styles.matButton}>
            <Image style={styles.matIcon} source={ICONS.EVENTS_PROGRAM} />
            <Text style={styles.matButtonText}>Events</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.academic}>
        <Text style={styles.exploreText}>Academic Programs</Text>
        <ScrollView horizontal="true" />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  explore: {
    paddingVertical: LAYOUT.GRID_SPACING,
    marginTop: LAYOUT.PADDING
  },
  exploreText: {
    fontSize: LAYOUT.FONT_H4,
    fontWeight: "700",
    paddingHorizontal: LAYOUT.GRID_SPACING,
    marginLeft: 10
  },
  matGrid: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: LAYOUT.GRID_SPACING
  },
  matBox: {
    padding: LAYOUT.GRID_SPACING,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  matButton: {
    backgroundColor: COLORS.WHITE,
    shadowColor: "#CFCCDC",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 5,
    padding: LAYOUT.PADDING,
    borderRadius: LAYOUT.RADIUS,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  matButtonText: {
    color: COLORS.TEXT,
    fontWeight: "600",
    fontSize: LAYOUT.FONT_H5,
    textAlign: "center"
  },
  matIcon: {
    width: 90,
    height: 90,
    marginBottom: LAYOUT.GRID_SPACING
  }
});
