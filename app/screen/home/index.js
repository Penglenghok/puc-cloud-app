import React, { Component } from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import { inject, observer } from "mobx-react";
import _styles from '../../styles';
import { ICONS } from '../../modules';
import Header from '../../components/Header'


@inject("environment")
@observer

export default class HomeScreen extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.environment.fetchData();
    }

    render() {
        return (
            <SafeAreaView style={_styles.containerPrimary}>
                <Header/>
               
            </SafeAreaView>
        );
    }
};


