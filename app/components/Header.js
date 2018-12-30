//import liraries
import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import {ICONS,COLORS} from '../modules';
import _style from '../styles'
export default Header=()=>{
    return(
        <View style={styles.header}>
        <Image style={_style.avatar} source={ICONS.PUC}/>
        <View>
            <Text>Paññāsāstra</Text>
            <Text>University of Cambodia</Text>
        </View>

        </View>
    )
}
const styles=StyleSheet.create({
    header:{
        backgroundColor:COLORS.WHITE,
    },
})
