//import liraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { ICONS, COLORS } from "../modules";
import _style from "../styles";
import Icon from "react-native-vector-icons/Feather";

export default (Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.flexrow}>
        <Image style={styles.logo} source={ICONS.PUC} />
        <View style={styles.title}>
          <Text style={styles.brandName}>Paññāsāstra</Text>
          <Text style={styles.brandName}>University of Cambodia</Text>
        </View>
      </View>
      <View style={styles.menu}>
        {/* <TouchableOpacity>
          <Icon style={styles.icon} name="md-paper" size={26} />
        </TouchableOpacity> */}
        <TouchableOpacity>
          <Icon color={COLORS.ICON_COLOR} name="search" size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  brandName: {
    fontSize: 18,
    fontWeight: "600"
  },
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: "row",
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#f8f8f8",
  },
  flexrow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    paddingLeft: 10,
    justifyContent: "center"
  },

  logo: {
    width: 45,
    height: 45
  },
  menu: {
    flexDirection: "row"
  },
  // icon: {
  //   paddingRight: 24
  // }
});
