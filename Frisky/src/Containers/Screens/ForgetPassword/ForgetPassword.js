import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Appearance,
  Alert
} from "react-native";
import {navigations,} from "@/Utility/Constants";
import Validation from "@/Utility/Validation";
import { globalstyles } from "@/Common/Style";
import { useTranslation } from "react-i18next";
import { useTheme } from '@/Hooks';
import { useEffect } from "react";
import { setDefaultTheme } from '@/Store/Theme'
import { details } from "../SignUp/SignUp";

export default function Forget({ navigation }) {
  //Intialization
  const [email, setEmail] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [t] = useTranslation()
  const { Common, Fonts, Gutters, Images } = useTheme();


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

  //Email Validation
  const handleCheckEmail = (text) => {
    setEmail(text);
    if (Validation.validateEmail(email)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  //ValidEmail
  const checkingUser = () => {
    let mail = details.map((details) => details.email)
    mail.forEach((Email) => {
      if (Email == email) {
         navigation.navigate(navigations.CHANGE_SCREEN, {
            paramKey: email
          })

      }
    })
  }

  //Rendering
  return (
    <View style={globalstyles.container}>
      <StatusBar translucent backgroundColor="black" barStyle="light-content" />
      <ImageBackground
        source={require("../../../Image/background.jpg")}
        style={[Gutters.imageBackground, Common.imageBackground, Images.ImageBackground]}
      >
        <View style={[Gutters.forgot_header, Fonts.forgot_header]}>
          <View>
            <Image
              style={globalstyles.image}
              source={require("../../../Image/music-note.png")}
            />
          </View>
          <View>
            <Text style={[Gutters.forgot_title, Fonts.forgot_title, Common.forgot_title]}>{t('screenText.FORGOT_TEXT')}</Text>
          </View>
          <View style={Gutters.forgot_input}>
            <TextInput
              style={[Gutters.forgot_textInput, Fonts.forgot_textInput, Common.forgot_textInput]}
              placeholder={t('placeholder.EMAIL')}
              maxLength={30}
              underlineColorAndroid={"transparent"}
              value={email}
              onChangeText={handleCheckEmail}
            />
            {checkValidEmail ? (
              <Text style={globalstyles.Errormsg}>{t('ErrorMessage.EMAIL')}</Text>
            ) : null}
            <TouchableOpacity
              style={[Gutters.forgot_button, Fonts.forgot_button, Common.forgot_button]}
              onPress={() => checkingUser()}
              disabled={(checkValidEmail == true) || (email == "")}
            >
              <Text style={globalstyles.buttonText}>
                {t('screenText.SEND_TEXT')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}


