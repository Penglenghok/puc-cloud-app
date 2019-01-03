import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { LAYOUT, ICONS, COLORS } from "../modules";
export default (Academic = () => {
  //   const { facultyTitle, imsageSource, description} = this.props;
  return (
    <View style={styles.container}>
      <Text style={styles.titleLable}>Academic Programs</Text>
      <ScrollView
        horizontal="true"
        showsHorizontalScrollIndicator="false"
        style={styles.academic}
      >
        {/* <View style={styles.academicBox}>
          <ImageBackground imageStyle={styles.imageRadius} source={imsageSource} style={styles.imageBg}>
            <Text style={styles.facultyTitle}>
            {facultyTitle}
            </Text>
          </ImageBackground>
          <Text style={styles.facultyDetail}>
          {description}
          </Text>
        </View> */}
        <TouchableOpacity style={styles.academicBox}>
          <ImageBackground
            imageStyle={styles.imageRadius}
            source={ICONS.FACULTY_ART}
            style={styles.imageBg}
          >
            <Text style={styles.facultyTitle}>
              Arts, Letters And Humanities
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.academicBox}>
          <ImageBackground
            imageStyle={styles.imageRadius}
            source={ICONS.FACULTY_BUSSINESS}
            style={styles.imageBg}
          >
            <Text style={styles.facultyTitle}>Business & Economics</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.academicBox}>
          <ImageBackground
            imageStyle={styles.imageRadius}
            source={ICONS.FACULTY_LAW}
            style={styles.imageBg}
          >
            <Text style={styles.facultyTitle}>Law & Public Affairs</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.academicBox}>
          <ImageBackground
            imageStyle={styles.imageRadius}
            source={ICONS.FACULTY_EDUCATION}
            style={styles.imageBg}
          >
            <Text style={styles.facultyTitle}>Education</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.academicBox}>
          <ImageBackground
            imageStyle={styles.imageRadius}
            source={ICONS.FACULTY_SCIENCES}
            style={styles.imageBg}
          >
            <Text style={styles.facultyTitle}>
              Mathematics, Sciences and Engineering
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.academicBox}>
          <ImageBackground
            imageStyle={styles.imageRadius}
            source={ICONS.FACULTY_MEDIA}
            style={styles.imageBg}
          >
            <Text style={styles.facultyTitle}>Communication & Media Arts</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.academicBox}>
          <ImageBackground
            imageStyle={styles.imageRadius}
            source={ICONS.FACULTY_SOCAIL}
            style={styles.imageBg}
          >
            <Text style={styles.facultyTitle}>
              Social Sciences & International Relations
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.academicBox}>
          <ImageBackground
            imageStyle={styles.imageRadius}
            source={ICONS.FACULTY_MENAGEMENT}
            style={styles.imageBg}
          >
            <Text style={styles.facultyTitle}>Management & Economics</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.academicBox}>
          <ImageBackground
            imageStyle={styles.imageRadius}
            source={ICONS.FACULTY_DESIGN}
            style={styles.imageBg}
          >
            <Text style={styles.facultyTitle}>Architecture & Design</Text>
          </ImageBackground>
        </TouchableOpacity>
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
  },
  academic: {
    padding: LAYOUT.GRID_SPACING
  },
  academicBox: {
    margin: LAYOUT.GRID_SPACING,
    width: LAYOUT.VIEW_PORT_WIDTH - (LAYOUT.VIEW_PORT_WIDTH * 30) / 100
  },
  facultyTitle: {
    fontSize: 26,
    fontWeight: "600",
    color: COLORS.WHITE,
    paddingVertical: LAYOUT.PADDING,
    paddingHorizontal: LAYOUT.PADDING
  },
  imageBg: {
    height: 320,
    flexDirection: "column-reverse"
  },
  imageRadius: {
    borderRadius: LAYOUT.CARD_RADIUS,
    resizeMode: "cover",
    width: "100%",
    height: "100%"
  }
});
