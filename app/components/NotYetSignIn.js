import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { LAYOUT, ICONS,COLORS } from "../modules";
export default (NotYetSignIn = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={ICONS.SIGN_IN_COVER} />
      <Text style={styles.title}>Who ?</Text>
      <Text style={styles.subtitle}>I Did't Recognize You</Text>
      <View style={styles.buttnbox}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttnbox}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: LAYOUT.VIEW_PORT_WIDTH,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "contain"
  },
  buttnbox: {
    paddingTop: LAYOUT.PADDING,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 180,
    height: 45,
    borderRadius: LAYOUT.RADIUS,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.TEXT,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
    textTransform: "uppercase",
    color:COLORS.TEXT,
  },
  title: {
      paddingTop:LAYOUT.PADDING,
      fontSize:35,
      fontWeight: '600'
  },
  subtitle:{
      color:COLORS.TEXT,
  }
});
