import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground
} from "react-native";
import { ICONS, LAYOUT, COLORS } from "../modules";
import Icon from "react-native-vector-icons/Feather";
import { BlurView, VibrancyView } from "react-native-blur";

export default (Profile = ({onTranscript}) => {
  return (
    <ImageBackground
      style={styles.container}
      imageStyle={styles.imagebg}
      source={ICONS.PUC_CAMPUS}
      blurRadius={7}
    >
      <View
        // style={{
        //   position: "absolute",
        //   top: 0,
        //   bottom: 0,
        //   left: 0,
        //   right: 0,
        //   backgroundColor: "rgba(246,214,137, 0)"
        // }}
      />
      <View style={styles.topProfile}>
        <View style={styles.leftProfile}>
          <Text style={styles.info}>Credit</Text>
          <Text style={styles.info}>118</Text>
        </View>
        <View style={styles.midProfile}>
          <View style={styles.shadow}>
            <View style={styles.profileicon}>
              <Image style={styles.image} source={ICONS.AVATAR} />
            </View>
          </View>
        </View>
        <View style={styles.rightProfile}>
          <Text style={styles.info}>GPA</Text>
          <Text style={styles.info}> 2.99</Text>
        </View>
      </View>
      <View style={styles.profiletext}>
        <Text style={styles.profileid}>ID: 00092135</Text>
        <Text style={[styles.textshadow, styles.profilename]}>
          HY Dely Ethan
        </Text>
      </View>
      <View style={styles.NavContainer}>
        <View style={styles.GridChapter}>
          <TouchableOpacity style={styles.chapterContaint} onPress={onTranscript}>
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
    </ImageBackground>
  );
});

const styles = StyleSheet.create({
  imagebg: {
    height: "100%",
    resizeMode: "cover"
  },
  container: {
    alignItems: "center",
    // borderBottomLeftRadius: 24,
    // borderBottomRightRadius: 24,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%"
  },
  topProfile: {
    paddingTop: 72,
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
    borderRadius: 50,
    overflow: "hidden",
    height: 100,
    width: 100,
    marginVertical: LAYOUT.PADDING
  },
  info: {
    textAlign: "center",
    fontSize: LAYOUT.FONT_SIZE,
    fontWeight: "600",
    color: COLORS.WHITE
  },
  profilename: {
    paddingTop: LAYOUT.BODY_HORIZONTAL,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
    color: COLORS.WHITE
  },
  profileid: {
    paddingTop: LAYOUT.PADDING,
    textAlign: "center",
    color: COLORS.WHITE
  },

  chapterContaint: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  chapterText: {
    paddingTop: 8,
    fontSize: 12,
    textAlign: "center",
    color: COLORS.WHITE
  },
  NavIcon: {
    fontSize: 26,
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
    marginVertical: LAYOUT.BODY_HORIZONTAL_ACTION
  },
  iconradius: {
    alignItems: "center",
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: "center"
  },
  absolute: {
    position: "absolute"
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 5
  },
  textshadow: {
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5
  }
});
