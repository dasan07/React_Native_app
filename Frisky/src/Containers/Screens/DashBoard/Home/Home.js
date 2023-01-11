import * as React from 'react';
import { useEffect } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  SectionList,
  Text,
  View,
  StatusBar,
} from "react-native";
import { homescreen } from "@/Utility/Constants";
import { useTheme } from '@/Hooks';
import { setDefaultTheme } from '@/Store/Theme';
import { Appearance } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '@/Store/CallShocketSlice/CallShocketSlice';
import { SECTIONS } from '@/Store/CallShocketSlice/CallShocketSlice';

const ListItem = ({ item }) => {
  //Initialization
  const { Common, Fonts, Gutters } = useTheme()

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
  const dispatch = useDispatch();
dispatch (getDetails());
const user = useSelector((state)=> state.callSocketSlice);

  //Rendering
  return (
    <View style={Gutters.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={Gutters.itemPhoto}
        resizeMode="cover"
      />
      <Text style={[Fonts.itemText, Common.itemText]}>{item.text}</Text>
    </View>
  );
};

export default () => {

  //Initialization
  const { Common, Fonts, Gutters } = useTheme()

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
    <View style={[Gutters.container, Common.container]}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={[Gutters.sectionHeader, Fonts.sectionHeader, Common.sectionHeader]}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

