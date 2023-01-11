import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { color } from "@/Utility/Constants";
import Home from "../Home/Home";
import Account from "../SubScreen/Account";
import Library from "../SubScreen/Library";
import Search from "../SubScreen/Search";
import { Image } from 'react-native';
import { globalstyles } from "@/Common/Style";
import { useTranslation } from "react-i18next";
import { useTheme } from '@/Hooks';
import { setDefaultTheme } from '@/Store/Theme'
import { useEffect } from "react";
import { Appearance } from "react-native";

const Tab = createBottomTabNavigator();
export default function NavBar() {
  const { t } = useTranslation()
  const { Common} = useTheme()

  //Themes
  const init = async () => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === 'dark') {
      await setDefaultTheme({ darkMode: true });
    } else {
      await setDefaultTheme({ theme: 'default', darkMode: null });
    }
  }

  useEffect(() => {
    init()
  })

  //Rendering
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, tabBarStyle: Common.back_container,
        tabBarLabelStyle: { color: color.WHITE, fontSize: 12 }
      }}
    >
      <Tab.Screen //buttom home screen navigation
        name="Home"
        component={Home}
        options={{
          tabBarLabel: t('icons.HOME'),
          tabBarIcon: ({ }) => (
            <Image
              style={globalstyles.bottom}
              source={require("../../../../Image/home.png")}
            />
          ),
        }}
      />
      {/* Bottom Search Screen Navigation */}
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: t('icons.SEARCH'),
          tabBarIcon: ({ }) => (
            <Image
              style={globalstyles.bottom}
              source={require("../../../../Image/search.png")}
            />
          ),
        }}
      />
      {/* Bottom Library Screen Navigation */}
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarLabel: t('icons.LIBRARY'),
          tabBarIcon: ({ }) => (
            <Image
              style={globalstyles.bottom}
              source={require("../../../../Image/library.png")}
            />
          ),
        }}
      />
      {/* Bottom Account Screen Navigation */}
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: t('icons.ACCOUNT'),
          tabBarIcon: ({ }) => (
            <Image
              style={globalstyles.bottom}
              source={require("../../../../Image/account.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
