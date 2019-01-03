import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { ICONS, LAYOUT, COLORS } from "../modules";
import Icon from "react-native-vector-icons/Feather";

export default (Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topProfile}>
        <View style={styles.leftProfile}>
          <Text style={styles.info}>Credit</Text>
          <Text style={styles.info}>118</Text>
        </View>
        <View style={styles.midProfile}>
          <View style={styles.profileicon}>
            <Image style={styles.image} source={ICONS.AVATAR} />
          </View>
        </View>
        <View style={styles.rightProfile}>
          <Text style={styles.info}>GPA</Text>
          <Text style={styles.info}> 2.99</Text>
        </View>
      </View>
      <View style={styles.profiletext}>
            <Text style={styles.profileid}>ID: 00092135</Text>
            <Text style={styles.profilename}>HY Dely Ethan</Text>
          </View>

      <View style={styles.NavContainer}>
        <View style={styles.GridChapter}>
          <TouchableOpacity style={styles.chapterContaint}>
            <View style={styles.cardTest}>
              <Icon name="award" style={styles.NavIcon} />
            </View>
            <Text style={styles.chapterText}>Transcript</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.GridChapter}>
          <TouchableOpacity style={styles.chapterContaint}>
            <View style={styles.cardTest}>
              <Icon name="clipboard" style={styles.NavIcon} />
            </View>
            <Text style={styles.chapterText}>Schedules</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.GridChapter}>
          <TouchableOpacity style={styles.chapterContaint}>
            <View style={styles.cardTest}>
              <Icon name="credit-card" style={styles.NavIcon} />
            </View>
            <Text style={styles.chapterText}>Payment</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.GridChapter}>
          <TouchableOpacity style={styles.chapterContaint}>
            <View style={styles.cardTest}>
              <Icon name="more-vertical" style={styles.NavIcon} />
            </View>
            <Text style={styles.chapterText}>More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.PROFILE,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  topProfile: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  leftProfile: {
    paddingHorizontal: LAYOUT.BODY_HORIZONTAL_ACTION
  },
  rightProfile: {
    paddingHorizontal: LAYOUT.BODY_HORIZONTAL_ACTION
  },
  midProfile: { flex: 1, justifyContent: "center", alignItems: "center" },
  profileicon: {
    height: 100,
    width: 100,
    borderRadius: 100,
    overflow: "hidden",
    marginVertical: LAYOUT.PADDING
  },
  info: {
    textAlign: "center",
    fontSize: LAYOUT.FONT_SIZE,
    fontWeight: "600",
    color: COLORS.WHITE
  },
  profilename: {
    paddingTop: LAYOUT.BODY_HORIZONTAL_ACTION,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
    color: COLORS.WHITE
  },
  profileid: {
    paddingTop: LAYOUT.PADDING,
    textAlign: "center",
    color: COLORS.TEXT
  },

  chapterContaint: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  chapterText: {
    fontSize: 12,
    textAlign: "center",
    color: COLORS.WHITE
  },
  NavIcon: {
    fontSize: 24,
    color: COLORS.WHITE
  },
  GridChapter: {
    width: LAYOUT.VIEW_PORT_WIDTH / 4,
    padding: 8,
    alignItems: "center"
  },
  NavContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: LAYOUT.BODY_HORIZONTAL_ACTION
  },
  cardTest: {
    alignItems: "center",
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: "center"
  }
});
