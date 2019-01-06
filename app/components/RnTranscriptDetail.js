import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import _styles from "../styles";
import { COLORS, LAYOUT } from "../modules";

export default (RnTranscriptDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.creatby}>
        <View style={_styles.flex1}>
          <Text style={styles.creatText}>January 5, 2019</Text>
        </View>
        <View style={[_styles.flex1, _styles.rows, styles.flexend]}>
          <Text style={styles.creatText}>Updated By:</Text>
          <Text style={styles.creatText}>Hok Pengleng</Text>
        </View>
      </View>
      <View style={styles.teacherbox}>
        <Text style={styles.teacherTitle}>Prof: </Text>
        <Text style={styles.teacherName}>Bun Sitha</Text>
      </View>
      <View style={styles.transcriptContainer}>
        <View style={styles.coursetitle}>
          <Text style={styles.coursecode}>COM 110</Text>
          <Text style={styles.coursename}>Introduction to Computers</Text>
        </View>
        <View style={styles.courseDetial}>
          <View style={styles.pointBox}>
            <View style={_styles.flex1}>
              <Text>Total Point</Text>
            </View>
            <Text>6.00</Text>
          </View>
          <View style={styles.pointBox}>
            <View style={_styles.flex1}>
              <Text>Grade Point</Text>
            </View>
            <Text>2.00</Text>
          </View>
          <View style={styles.pointBox}>
            <View style={_styles.flex1}>
              <Text>Alpha Grade</Text>
            </View>
            <Text>C</Text>
          </View>
          <View style={styles.pointBox}>
            <View style={_styles.flex1}>
              <Text>Credit Earned</Text>
            </View>
            <Text>3</Text>
          </View>
          <View style={styles.pointBox}>
            <View style={_styles.flex1}>
              <Text>Credit Attem</Text>
            </View>
            <Text>2.00</Text>
          </View>
          <View style={styles.pointBox}>
            <View style={_styles.flex1}>
              <Text>Field / Lab</Text>
            </View>
            <Text />
          </View>
          <View style={styles.pointBox}>
            <View style={_styles.flex1}>
              <Text>Lecture Hours</Text>
            </View>
            <Text>48</Text>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    margin: 8,
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
    borderRadius: LAYOUT.RADIUS
  },
  teacherTitle: {
    fontSize: 12,
    color: COLORS.TEXT
  },
  teacherbox: {
    paddingHorizontal: LAYOUT.PADDING,
    paddingTop: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  teacherName: {
    fontSize: 16
  },
  creatby: {
    flexDirection: "row",
    padding: LAYOUT.PADDING
  },
  creatText: {
    fontSize: 12,
    color: COLORS.TEXT
  },
  flexend: {
    justifyContent: "flex-end"
  },
  transcriptContainer: {
    padding: LAYOUT.PADDING
  },
  coursetitle: {
    paddingBottom: LAYOUT.PADDING
  },
  coursecode: {
    fontSize: 12,
    paddingVertical: 8
  },
  coursename: {
    fontSize: 18
  },
  courseDetial: {
    paddingHorizontal: 8
  },
  pointBox: {
    flexDirection: "row",
    paddingVertical: LAYOUT.PADDING
  }
});
