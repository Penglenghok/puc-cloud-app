//import liraries
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORSINDEX, COLORS, LAYOUT, AVATAR } from "../modules";
import _style from "../styles";
import Icon from "react-native-vector-icons/Feather";

export default (MatList = ({ name, index, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.header}>
      <Icon
        color={COLORSINDEX[index].color}
        style={styles.icon}
        name={AVATAR[index].name}
      />
      <Text style={styles.text}>{name}</Text>
      <Icon style={styles.Next} name="chevron-right" />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  icon: {
    fontSize: 28,
    paddingRight: LAYOUT.PADDING
  },
  text: {
    flex: 1,
    fontSize: 18,
    color: COLORS.TEXT
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: LAYOUT.BODY_HORIZONTAL_ACTION,
    paddingLeft: 15,
    paddingRight: 30
  },
  Next: {
    fontSize: 28,
    color: COLORS.ICON_COLOR
  }
});
