import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { LAYOUT, COLORS } from "../modules";
import _styles from "../styles";
import MatButton from "./MatButton";

export default (AddClass = () => {
  return (
    <View style={styles.container}>
      <View style={styles.classInfo}>
        <Text style={styles.coursecode}>COM 110</Text>
        <Text style={[styles.coursename,{paddingBottom:8}]}>Introduction To Computers</Text>
        <View style={[_styles.rows,{paddingVertical:4}]}>
          <Text style={styles.courseLable}>Prof :</Text>
          <Text style={styles.courseInfo}>Bun Sitha</Text>
        </View>
        <View style={[_styles.rows,{paddingVertical:4}]}>
          <Text style={styles.courseLable}>Date :</Text>
          <Text style={styles.courseInfo}>Monday / Wednesday</Text>
        </View>
        <View style={[_styles.rows,{paddingVertical:4}]}>
          <Text style={styles.courseLable}>Time :</Text>
          <Text style={styles.courseInfo}>8:00 - 9:30 / 8:00 - 11:00</Text>
        </View>
        <View style={[_styles.rows,{paddingVertical:4}]}>
          <Text style={styles.courseLable}>Location :</Text>
          <Text style={styles.courseInfo}>South Campus</Text>
        </View>
        <View style={[_styles.rows,{paddingVertical:4}]}>
          <Text style={styles.courseLable}>Room :</Text>
          <Text style={styles.courseInfo}>BIS Lab2</Text>
        </View>
        
      </View>
      <View style={styles.btnAdd}>
        <TouchableOpacity style={styles.matButton}>
          <Text style={styles.text}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  classInfo: {
    flex: 1
  },
  btnAdd: {
    paddingHorizontal: LAYOUT.PADDING,
    justifyContent: "center",
    alignItems: "center"
  },
  matButton: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 50,
    minHeight: 32,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  text: {
    fontSize: 16,
    color: COLORS.WHITE,
    fontWeight: "600"
  },
  coursecode: {
    fontSize: 12,
    paddingVertical: 8
  },
  coursename: {
    fontSize: 18
  },
  courseInfo: {
    flex:3,
    paddingHorizontal: 8,
    fontWeight:'600'
  },
  courseLable:{
    flex:1,
    fontSize: 12,
  }
});
