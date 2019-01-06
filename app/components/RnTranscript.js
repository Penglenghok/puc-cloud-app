import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { LAYOUT, COLORS } from "../modules";

export default (RnTranscript = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.coursetitle}>
        <Text style={styles.coursecode}>{data.code}</Text>
        <Text style={styles.coursename}>{data.name}</Text>
      </View>
      <View style={styles.list}>
        <View style={styles.gridbox}>
          <Text style={styles.labletitle}>Lec Hours</Text>
          <Text style={styles.labledata}>{data.hours}</Text>
        </View>
        <View style={styles.gridbox}>
          <Text style={styles.labletitle}>Field / Lab</Text>
          <Text style={styles.labledata}>{data.field}</Text>
        </View>

        <View style={styles.gridbox}>
          <Text style={styles.labletitle}>Credit Attem</Text>
          <Text style={styles.labledata}>{data.creditAttem}</Text>
        </View>

        <View style={styles.gridbox}>
          <Text style={styles.labletitle}>Credit Earned</Text>
          <Text style={styles.labledata}>{data.creditEarned}</Text>
        </View>

        <View style={styles.gridbox}>
          <Text style={styles.labletitle}>Alpha Grade</Text>
          <Text style={styles.labledata}>{data.alphaGrade}</Text>
        </View>

        <View style={styles.gridbox}>
          <Text style={styles.labletitle}>Grade Point</Text>
          <Text style={styles.labledata}>{data.gradePoint}</Text>
        </View>

        <View style={styles.gridbox}>
          <Text style={styles.labletitle}>Total Point</Text>
          <Text style={styles.labledata}>{data.totalPoint}</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    margin: 6,
    backgroundColor: COLORS.DIVIDER,
    borderRadius: LAYOUT.RADIUS,
    padding:LAYOUT.PADDING
  },
  coursetitle: {
    paddingBottom:LAYOUT.PADDING,
  },
  coursecode: {
    fontSize: 12
  },
  coursename: {
    fontSize: 18,
    paddingVertical: LAYOUT.BODY_HORIZONTAL
  },
  labletitle: {
    textAlign: "center",
    fontSize: 8,
    width: 35
  },
  list: {
    paddingHorizontal: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  gridbox: {
    width: "14%",
    justifyContent: "center",
    alignItems: "center"
  },
  labledata: {
    paddingTop: 6,
    fontSize: 14
  }
});
