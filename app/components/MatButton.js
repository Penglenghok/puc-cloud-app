//import liraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORSINDEX, COLORS,LAYOUT,AVATAR } from "../modules";
import _style from "../styles";
import Icon from "react-native-vector-icons/Feather";

export default (MatButton = ({name,onClick}) => {
  return (
        <TouchableOpacity onPress={onClick}>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
    icon:{
        fontSize: 28,
        paddingRight: LAYOUT.PADDING,
    },
    text:{
        flex:1,
        fontSize:18,
        color:COLORS.TEXT,
    },
    header:{
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical:LAYOUT.BODY_HORIZONTAL_ACTION,
        paddingHorizontal:20,

    },
    Next:{
        fontSize:28,
        color: COLORS.ICON_COLOR
    }
});
