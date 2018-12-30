import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SettingsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>SettingScreen</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ababab',
    },
});

