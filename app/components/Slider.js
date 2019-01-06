import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { ICONS, COLORS } from "../modules";

export default (ImageSlider = () => {
  return (
    <View style={styles.container}>
      <Swiper
        dot={
          <View
            style={{
              backgroundColor: "rgba(0,0,0,.2)",
              width: 5,
              height: 5,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: "#000",
              width: 7,
              height: 7,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3
            }}
          />
        }
        paginationStyle={{
          bottom: 5
        }}
        loop
        autoplay
      >
        <View style={styles.slide}>
          <Image style={styles.image} source={ICONS.SLID1} />
        </View>
        <View style={styles.slide}>
          <Image style={styles.image} source={ICONS.SLID2} />
        </View>
        <View style={styles.slide}>
          <Image style={styles.image} source={ICONS.SLID3} />
        </View>
        <View style={styles.slide}>
          <Image style={styles.image} source={ICONS.SLID4} />
        </View>
      </Swiper>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 200
  },

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    alignSelf: "stretch",
    width: null,
    height: null
  }
});
