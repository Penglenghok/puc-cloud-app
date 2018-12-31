import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
export default class FeedScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
        </View>
    );
}
}

// define your styles
const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
},
});
