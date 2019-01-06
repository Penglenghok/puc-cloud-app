//import liraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ICONS, COLORS,LAYOUT } from "../modules";
import _style from "../styles";
import Icon from "react-native-vector-icons/Feather";
import DrawerLayout from "react-native-gesture-handler/DrawerLayout";

export default (PrimaryHeader = ({goBack}) => {
  return (
    <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
            <Icon style={styles.goBack} name="arrow-left"/>
        </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        paddingVertical:LAYOUT.BODY_HORIZONTAL
    },
    goBack:{
        fontSize:28,
        color: COLORS.ICON_COLOR
    }
});
