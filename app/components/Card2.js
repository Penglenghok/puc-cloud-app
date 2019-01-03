import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { LAYOUT, ICONS, COLORS } from "../modules";

export default (Card2 = ({Title, Image, Description}) => {
  return (
    <TouchableOpacity style={styles.academicBox}>
      <ImageBackground
        imageStyle={styles.imageRadius}
        source={Image}
        style={styles.imageBg}
      >
        <Text style={styles.facultyDescription}>{Description}</Text>
        <Text style={styles.facultyTitle}>{Title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
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
    flex: 1,
    fontSize: 26,
    fontWeight: "600",
    color: COLORS.WHITE,
    paddingVertical: LAYOUT.PADDING,
    paddingHorizontal: LAYOUT.PADDING
  },
  facultyDescription: {
    fontSize: 12,
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
