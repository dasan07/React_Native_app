import { Image, StatusBar, View, Appearance } from 'react-native'
import React from 'react'
import { color } from '../../../../Utility/Constants'
import { useTheme } from '@/Hooks';
import { setDefaultTheme } from '@/Store/Theme'
import { useEffect } from "react";

export default function HSB() {

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
    <View style={Common.Over}>
      <StatusBar
        translucent
        backgroundColor={color.BLACK}
        barStyle="light-content"
      />
      <View style={[Gutters.Center, Fonts.Center, Common.Center]}>
        <Image
          style={Gutters.Icon}
          source={require('../../../../Image/LogoMenu.png')}
        />
        <Image
          style={Gutters.Icon1}
          source={require('../../../../Image/bell.png')}
        />
      </View>
    </View>
  )
}

