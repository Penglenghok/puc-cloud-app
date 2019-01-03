import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity
} from "react-native";
import { TextField } from "react-native-material-textfield";
import PrimaryHeader from "../../components/PrimaryHeader";
import _styles from "../../styles";
import MatButton from "../../components/MatButton";
import { COLORS, LAYOUT } from "../../modules";
import Modal from "react-native-modal";
import Gender from "../../components/Gender";
import Icon from "react-native-vector-icons/Feather";
import { GenderList } from "../../dummy/list";
import DatePicker from "react-native-datepicker";
import moment from 'moment/min/moment-with-locales';
@inject("institute")
@observer
export default class RegisterFormScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: "",
      firstName: "",
      khmerLastName: "",
      khmerFirstName: "",
      phone: "",
      gender: GenderList[0],
      birthDate: "1995-01-05",
      address: "",
      isModalVisible: false,
    };
  }

  onSelectedGender = item => {
    this.setState({ gender: item });
    this._toggleModal();
  };

  componentDidMount() {}

  renderModalContent = () => (
    <View style={_styles.modalContent}>
      <Gender onClick={this.onSelectedGender} />
      <TouchableOpacity
        style={[_styles.modalButton]}
        onPress={this._toggleModal}
      >
        <Text style={_styles.modalButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  _toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  _onRegister = () => {};

  render() {
    const {
      lastName,
      firstName,
      khmerLastName,
      khmerFirstName,
      phone,
      gender,
      birthDate,
      address
    } = this.state;
    return (
      <SafeAreaView style={[_styles.containerWhite]}>
        <PrimaryHeader goBack={() => this.props.navigation.goBack()} />
        <ScrollView style={_styles.container}>
          <Text>Testing Application Form</Text>
          <TextField
            label="Last name *"
            tintColor={COLORS.PRIMARY}
            baseColor={COLORS.INPUT}
            value={lastName}
            onChangeText={lastName => this.setState({ lastName })}
          />
          <TextField
            label="First name *"
            value={firstName}
            baseColor={COLORS.INPUT}
            tintColor={COLORS.PRIMARY}
            onChangeText={firstName => this.setState({ firstName })}
          />
          <TextField
            label="Khmer last name *"
            value={lastName}
            baseColor={COLORS.INPUT}
            tintColor={COLORS.PRIMARY}
            onChangeText={lastName => this.setState({ lastName })}
          />
          <TextField
            label="Khmer first name *"
            value={firstName}
            tintColor={COLORS.PRIMARY}
            baseColor={COLORS.INPUT}
            onChangeText={firstName => this.setState({ firstName })}
          />
          <TextField
            label="Phone number *"
            value={phone}
            tintColor={COLORS.PRIMARY}
            baseColor={COLORS.INPUT}
            onChangeText={phone => this.setState({ phone })}
          />
          <TextField
            label="Gender *"
            value={gender.text}
            tintColor={COLORS.PRIMARY}
            baseColor={COLORS.INPUT}
            onFocus={this._toggleModal}
            onChangeText={gender => this.setState({ gender })}
          />
          <DatePicker
            style={{ width: 200 }}
            date={moment(birthDate)}
            mode="date"
            placeholder="select date"
            format='LL'
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              },
            }}
            onDateChange={date => {
              this.setState({ birthDate: date });
            }}
          />
          <TextField
            label="Address"
            value={address}
            multiline={true}
            tintColor={COLORS.PRIMARY}
            baseColor={COLORS.INPUT}
            onChangeText={address => this.setState({ address })}
          />
          <MatButton name="Register" onClick={this._onRegister} />
        </ScrollView>
        <Modal
          isVisible={this.state.isModalVisible}
          style={_styles.bottomModal}
          onBackdropPress={() => this.setState({ isModalVisible: false })}
        >
          {this.renderModalContent()}
        </Modal>
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
