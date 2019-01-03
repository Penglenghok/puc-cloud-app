import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { LAYOUT, ICONS, COLORS } from "../modules";
import { GenderList } from "../dummy/list";
export default (Gender = ({ onClick }) => {
  return GenderList.map(m => {
    return (
      <TouchableOpacity
        onPress={() => onClick(m)}
        style={[styles.modalButton, styles.divider]}
        key={m.key}
      >
        <Text style={styles.modalButtonText}>{m.text}</Text>
      </TouchableOpacity>
    );
  });
});

const styles = StyleSheet.create({
  modalButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: LAYOUT.BODY_HORIZONTAL_ACTION,
    paddingVertical: LAYOUT.PADDING
  },
  divider: {
    borderBottomColor: COLORS.DIVIDER,
    borderBottomWidth: 1
  },
  modalButtonIcon: {
    fontSize: 24,
    color: COLORS.ICON_COLOR
  },
  modalButtonText: {
    flex: 1,
    fontSize: 16,
    color: COLORS.TEXT
  }
});
