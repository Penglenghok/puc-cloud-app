//import liraries
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORSINDEX, COLORS, LAYOUT, AVATAR } from "../modules";
import _style from "../styles";
import Icon from "react-native-vector-icons/Feather";
export default (MatCard = ({ name, index, description, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.header}>
     <View style={{alignItems:"flex-start",height:'100%'}}>
     <Icon color={COLORSINDEX[index].color} style={styles.icon} name='check-circle'/>
     </View>
      <View style={styles.textbox}>
        <Text style={styles.text}>{name}</Text>
        <View style={{ width: "90%" }}>
          <Text numberOfLines={2} style={styles.subtext}>
            {description}
          </Text>
        </View>
      </View>
      <Icon style={styles.Next} name="chevron-right" />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  icon: {
    fontSize: 28,
    paddingRight: LAYOUT.PADDING
  },
  textbox: {
    flex: 1
  },
  text: {
    fontSize: 18,
    color: COLORS.TEXT
  },
  subtext: {
    paddingTop: LAYOUT.PADDING,
    fontSize: 12,
    color: COLORS.TEXT
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 30,
    paddingVertical: LAYOUT.BODY_HORIZONTAL_ACTION,
  },
  Next: {
    fontSize: 28,
    color: COLORS.ICON_COLOR
  }
});
