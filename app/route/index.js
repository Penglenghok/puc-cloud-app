import React from "react";
import { Text } from "react-native";
import _styles from "../styles";
import { COLORS } from "../modules";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import HomeScreen from "../screen/home";
import ProfileScreen from "../screen/profile";
import NotificationScreen from "../screen/notification";
import MoreScreen from "../screen/more";
import FeedScreen from "../screen/feed";
import Ionicons from "react-native-vector-icons/Ionicons";

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: <Header />
    }
  }
});
const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  {
    headerMode: "none"
  }
);
const NotificationStack = createStackNavigator(
  {
    Notification: NotificationScreen
  },
  {
    headerMode: "none"
  }
);
const MoreStack = createStackNavigator(
  {
    More: MoreScreen
  },
  {
    headerMode: "none"
  }
);

import SettingsScreen from "../screen/settings";
import Header from "../components/Header";

const TabNavigator = createBottomTabNavigator(
  {
    HomeTab: HomeStack,
    FeedTab: FeedScreen,
    ProfileTab: ProfileStack,
    NotificationTab: NotificationStack,
    MoreTab: MoreStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "HomeTab") {
          iconName = `ios-home${focused ? "" : ""}`;
        } else if (routeName === "FeedTab") {
          iconName = `ios-list-box${focused ? "" : ""}`;
        } else if (routeName === "ProfileTab") {
          iconName = `ios-person${focused ? "" : ""}`;
        } else if (routeName === "NotificationTab") {
          iconName = `ios-notifications${focused ? "" : ""}`;
        } else if (routeName === "MoreTab") {
          iconName = `md-menu${focused ? "" : ""}`;
        }
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 26 : 26}
            color={tintColor}
          />
        );
      },
      tabBarLabel: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let lableName;
        if (routeName === "HomeTab") {
          lableName = `Home`;
        } else if (routeName === "FeedTab") {
          lableName = `New Feed`;
        } else if (routeName === "ProfileTab") {
          lableName = `Profile`;
        } else if (routeName === "NotificationTab") {
          lableName = `Notification`;
        } else if (routeName === "MoreTab") {
          lableName = `More`;
        }
        return (
          <Text style={focused ? _styles.lableTabActive : _styles.lableTab}>
            {lableName}
          </Text>
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: COLORS.PRIMARY,
      inactiveTintColor: "black",
      showLabel: false,
      style: {
        elevation: 0,
        borderTopWidth: 1,
        borderTopColor: "#F0F0F5",
        backgroundColor: "#fff"
      },
      indicatorStyle: {
        backgroundColor: "#fff"
      }
    }
  }
);

export default createAppContainer(TabNavigator);
