import React, { Component } from "react";
import { SafeAreaView ,ScrollView} from "react-native";
import { inject, observer } from "mobx-react";
import _styles from "../../styles";
import ImageSlider from "../../components/Slider";
import Admission from '../../components/Admission';
import Chapter from "../../components/Chapter";
import Academic from "../../components/Academic";
import ButtomExplore from "../../components/ButtomExplore";
import English from "../../components/English";

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
        <ScrollView showsVerticalScrollIndicator="false">
        <ImageSlider />
        <Chapter/>
        <Admission
          onRegister={()=>this.props.navigation.navigate("Register")}
        />
        <English/>
        <Academic/>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
