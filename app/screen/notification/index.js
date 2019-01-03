//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import UnderConstruction from '../../components/UnderConstruction';

// create a component
export default class NotificationScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <UnderConstruction/>
            </SafeAreaView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
