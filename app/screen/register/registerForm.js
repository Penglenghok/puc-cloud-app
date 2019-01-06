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
import moment from "moment/min/moment-with-locales";
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
      isModalVisible: false
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
      <SafeAreaView style={[_styles.container]}>
        <PrimaryHeader goBack={() => this.props.navigation.goBack()} />
        <ScrollView style={_styles.container}>
          <Text>Testing Application Form</Text>
          <View style={styles.containt}>
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
            <View style={styles.faketextfield}>
              <Text style={styles.fakeLabel}>Gender *</Text>
              <TouchableOpacity
                onPress={this._toggleModal}
                onChangeText={gender => this.setState({ gender })}
              >
                <Text style={styles.fakeInputText}>{gender.text}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.faketextfield}>
              <Text style={styles.fakeLabel}>Date *</Text>
              <DatePicker
                style={{
                  flex: 1,
                  width: "100%"
                }}
                date={moment(birthDate)}
                format="LL"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                customStyles={{
                  dateTouchBody: {
                    height: "100%",
                    alignItems: "flex-start",
                    justifyContent: "flex-start"
                  },
                  dateInput: {
                    borderWidth: 0,
                    height: 24,
                    top: 2,
                    textAlign: "left",
                    alignItems: "flex-start",
                    justifyContent: "flex-start"
                  },
                  dateText: {
                    fontSize: 16,
                    color: "rgba(0,0,0,.87)"
                  },
                  btnTextConfirm: {
                    color: COLORS.PRIMARY
                  }
                }}
                onDateChange={date => {
                  this.setState({ birthDate: date });
                }}
              />
            </View>
            <TextField
              label="Address"
              value={address}
              multiline={true}
              tintColor={COLORS.PRIMARY}
              baseColor={COLORS.INPUT}
              onChangeText={address => this.setState({ address })}
            />
            <View style={styles.mt30}>
              <MatButton name="Register" onClick={this._onRegister} />
            </View>
          </View>
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
  mt30: {
    marginTop: 30,
    marginBottom: 80
  },
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
  },
  containt: {
    paddingHorizontal: LAYOUT.BIG_PADDING
  },
  faketextfield: {
    backgroundColor: "transparent",
    paddingTop: 20,
    paddingBottom: 8,
    borderBottomColor: "rgb(121,121,136)",
    borderBottomWidth: 0.3333333333333333,
    height: 64
  },
  fakeLabel: { fontSize: 12, color: "rgb(121,121,136)" },
  fakeInputText: {
    fontSize: 16,
    height: 24,
    top: 2,
    textAlign: "left",
    color: "rgba(0,0,0,.87)"
  }
});
