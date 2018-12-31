import React, { Component } from "react";
import { SafeAreaView ,ScrollView} from "react-native";
import { inject, observer } from "mobx-react";
import _styles from "../../styles";
import ImageSlider from "../../components/Slider";
import Explore from '../../components/Explore';
import Chapter from "../../components/Chapter";

@inject("environment")
@observer
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.environment.fetchData();
  }

  render() {
    return (
      <SafeAreaView style={_styles.containerPrimary}>
        <ScrollView>
        <ImageSlider />
        <Chapter/>
        <Explore />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
