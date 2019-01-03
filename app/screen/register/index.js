import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Text, StyleSheet, SafeAreaView, FlatList, View } from "react-native";
import PrimaryHeader from "../../components/PrimaryHeader";
import _styles from "../../styles";
import MatList from "../../components/MatList";
import { COLORS, LAYOUT } from "../../modules";

@inject("institute")
@observer
export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.institute.fetchData();
  }

  _onSelectedInstitute(item) {
    this.props.institute.fetchInstitute(item);
    this.props.navigation.navigate("Program");
  }
  _renderHeader = () => {
    return (
      <View>
        <Text style={styles.title}>How to Lodge a Divorce Application</Text>
        <Text style={styles.subtitle}>
          A step by step guide on how to lodge a divorce application in
          Australia
        </Text>
      </View>
    );
  };

  render() {
    const { data, loading } = this.props.institute;
    return (
      <SafeAreaView style={[_styles.containerWhite, _styles.container]}>
        <PrimaryHeader goBack={() => this.props.navigation.goBack()} />
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <MatList
                index={index}
                name={item.name}
                onClick={() => this._onSelectedInstitute(item)}
              />
            )}
            keyboardShouldPersistTaps="always"
            ListHeaderComponent={this._renderHeader}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    paddingTop: LAYOUT.BODY_HORIZONTAL,
    fontSize: 32,
    fontWeight: "700",
    width: "90%"
  },
  subtitle: {
    paddingVertical: LAYOUT.BODY_HORIZONTAL_ACTION,
    fontSize: 14,
    color: COLORS.TEXT
  }
});
