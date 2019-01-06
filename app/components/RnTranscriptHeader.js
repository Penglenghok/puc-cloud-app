import React, { Component } from "react";
import { Text, StyleSheet, View,SafeAreaView } from "react-native";
import PrimaryHeader from './PrimaryHeader';
import {COLORS,LAYOUT} from '../modules';

export default (RnTranscriptHeader = () => {
  return <View style={styles.container}>
            <View style={styles.gird}>
                <Text style={styles.info}>Credit</Text>
                <Text style={styles.info}>118</Text>
            </View>
            <View style={styles.gird}>
                <Text style={styles.info}>GPA</Text>
                <Text style={styles.info}>2.99</Text>
            </View>
        </View>
      ;
});

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: '#33333380',
        paddingBottom:LAYOUT.BODY_HORIZONTAL
    },
    gird:{
        alignItems:'center',
        justifyContent: 'center',
        width: '50%'
    },
    info: {
        textAlign: "center",
        fontSize: LAYOUT.FONT_SIZE,
        fontWeight: "600",
      },
});
