import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ImageBackground
} from "react-native";
import { ICONS, LAYOUT,COLORS } from "../modules";
export default (UnderConstruction = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={ICONS.UNDER_CONSTRUCTION} />
      <View style={styles.textbg}>
        <View style={styles.bg}>
          <Text style={styles.text}>Under Construction</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width:LAYOUT.VIEW_PORT_WIDTH
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "contain"
  },
  bg: {
    width: '60%',
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(251,222,110)",
    borderRadius: LAYOUT.RADIUS,
    borderWidth: 4,
    borderColor: COLORS.TEXT,
  },
  text: {
    color:COLORS.TEXT,
    textAlign: 'center',
    fontSize: LAYOUT.FONT_H4,
    fontWeight: "700",
    textTransform: "uppercase"
  },
  textbg: {
    paddingTop: LAYOUT.PADDING,
    justifyContent: "center",
    alignItems: "center"
  }
});
