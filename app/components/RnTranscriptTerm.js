import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {transcriptlist} from '../dummy/transcript'
import RnTranscript from './RnTranscript';
import {LAYOUT} from '../modules'


export default RnTranscriptTerm =()=> {
    return (
      <View style={styles.container}>
        <Text style={styles.termName}> Term:27 Aug 2014 </Text>
        {
          transcriptlist.map(m=>{
            return (<RnTranscript data={m}/>)
          })
        }
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:LAYOUT.PADDING
    },
    termName:{
        paddingHorizontal:LAYOUT.PADDING,
        fontSize: 18,
        fontWeight: '700',
    },

})
