import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { LAYOUT, ICONS, COLORS } from "../modules";
import Card2 from "./Card2";
export default (English = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleLable}>English Programs</Text>
      <ScrollView
        horizontal="true"
        showsHorizontalScrollIndicator="false"
        style={styles.academic}
      >
        <Card2
          Title="Intensive English for Academic Purposes"
          Image={ICONS.ENG_IMAGE2}
          Description="[IEAP] The purpose of the IEAP program is to improve students’ English skills so that they will be fully prepared to enter our university and able to study academic subjects with English as the language of instruction."
        />
        <Card2
          Title="General English as a Second Language"
          Image={ICONS.ENG_IMAGE3}
          Description="[GESL] The program comprises twelve levels and the students study for an hour and a half a day, five days a week, for twelve weeks, a total of ninety hours per level. As its name suggests,"
        />
        <Card2
          Title="English XpresS Weekend Program"
          Image={ICONS.ENG_IMAGE4}
          Description="The English XpresS weekend program follow the same syllabus as students in the GESL program and attend class on Saturday afternoons and Sunday mornings."
        />
        <Card2
          Title="English for High School Students"
          Image={ICONS.ENG_IMAGE5}
          Description="[EHSS] The program gives younger students the opportunity to build their English skills so that when they are eighteen years old and complete their secondary education."
        />
        <Card2
          Title="English for Special Purposes"
          Image={ICONS.ENG_IMAGE6}
          Description="[ESP] The program comprises courses custom-made to meet the needs of specific groups of students and is designed to enhance students’ language skills in specialized areas including conversation, writing skills, and business English."
        />
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingVertical: LAYOUT.GRID_SPACING
  },
  titleLable: {
    fontSize: LAYOUT.FONT_H4,
    fontWeight: "600",
    paddingHorizontal: LAYOUT.GRID_SPACING,
    marginLeft: 10
  }
});
