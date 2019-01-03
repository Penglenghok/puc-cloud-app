import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, LAYOUT } from "../modules";

export default (Chapter = () => {
  return (
    <View style={styles.NavContainer}>
      <View style={styles.GridChapter}>
        <TouchableOpacity style={styles.chapterContaint}>
          <LinearGradient
            start={LAYOUT.START_LINE_GRADIENT_V}
            end={LAYOUT.END_LINE_GRADIENT_V}
            colors={COLORS.SCHOOL_FEE}
            style={styles.cardTest}
          >
            <Icon name="layers" style={styles.NavIcon} />
          </LinearGradient>
          <Text style={styles.chapterText}>Academic Schedules</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.GridChapter}>
        <TouchableOpacity style={styles.chapterContaint}>
          <LinearGradient
            start={LAYOUT.START_LINE_GRADIENT_V2}
            end={LAYOUT.END_LINE_GRADIENT_V2}
            colors={COLORS.BLUE_LINE}
            style={styles.cardTest}
          >
            <Icon name="rocket" style={styles.NavIcon} />
          </LinearGradient>
          <Text style={styles.chapterText}>Academic Terms</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.GridChapter}>
        <TouchableOpacity style={styles.chapterContaint}>
          <LinearGradient
            start={LAYOUT.START_LINE_GRADIENT_V2}
            end={LAYOUT.END_LINE_GRADIENT_V2}
            colors={COLORS.PURPLE_LINE}
            style={styles.cardTest}
          >
            <Icon name="globe-alt" style={styles.NavIcon} />
          </LinearGradient>
          <Text style={styles.chapterText}>English Terms</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.GridChapter}>
        <TouchableOpacity style={styles.chapterContaint}>
          <LinearGradient
            start={LAYOUT.START_LINE_GRADIENT_V2}
            end={LAYOUT.END_LINE_GRADIENT_V2}
            colors={COLORS.RED_LINE}
            style={styles.cardTest}
          >
            <Icon name="calendar" style={styles.NavIcon} />
          </LinearGradient>
          <Text style={styles.chapterText}>Public Holiday</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  chapterContaint: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  chapterText: {
    fontSize: 14,
    textAlign: "center",
    color: COLORS.TEXT
  },
  NavIcon: {
    fontSize: 32,
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
    paddingVertical: LAYOUT.PADDING,
    backgroundColor: COLORS.WHITE
  },
  cardTest: {
    alignItems: "center",
    height: 60,
    width: 60,
    borderRadius: 60,
    justifyContent: "center",
    marginBottom: LAYOUT.PADDING
  }
});
