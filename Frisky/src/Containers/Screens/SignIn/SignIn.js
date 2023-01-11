import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Appearance
} from "react-native";
import { navigations, } from "@/Utility/Constants";
import Validation from "@/Utility/Validation";
import { globalstyles } from "@/Common/Style";
import { useTranslation } from "react-i18next";
import { useTheme } from '@/Hooks';
import { useEffect } from "react";
import { setDefaultTheme } from '@/Store/Theme'
import { details } from "../SignUp/SignUp";

export default function LogForm({ navigation }) {
  //Initialization
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPass, setCheckValidPass] = useState(false);
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

  //Valid Email
  const userCheck = () => {
    let mail = details.map((details) => details.email)
    mail.forEach((Email) => {
      if (Email == email) {
        userChecking();
      }
    })
  }

  //Valid Password
  const userChecking = () => {
    let pass = details.map((details) => details.password)
    pass.forEach((Password) => {
      if (Password == password) {
        navigation.navigate(navigations.HOME_SCREEN)
      }
    })
  }

  //Email Validation
  const handleCheckEmail = (text) => {
    setEmail(text);
    if (Validation.validateEmail(email)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  //Password Validation
  const checkPasswordValidity = (text) => {
    setPassword(text);
    if (Validation.validatePassword(password)) {
      setCheckValidPass(false);
    } else {
      setCheckValidPass(true);
    }
  };

  //Rendering
  return (
    <View style={globalstyles.container}>
      <StatusBar translucent backgroundColor="black" barStyle="light-content" />
      <ImageBackground
        source={require("../../../Image/background.jpg")}
        style={[Gutters.imageBackground, Common.imageBackground, Images.imageBackground]}
      >
        <View style={[Gutters.itemContainer]}>
          <View>
            <Text style={[Common.header, Fonts.header]}>{t('Signup.WELCOME')}</Text>
          </View>
          <View>
            <Image
              style={globalstyles.image}
              source={require("../../../Image/music-note.png")}
            />
          </View>
          <View style={[Gutters.inputText1]}>
            <TextInput
              style={[Gutters.textInput, Common.textInput, Fonts.textInput]}
              placeholder={t('placeholder.EMAIL')}
              value={email}
              onChangeText={(text) => handleCheckEmail(text)}
              underlineColorAndroid='transparent'
            />
          </View>
          <View>
            {checkValidEmail ? (
              <Text style={globalstyles.Errormsg}>{t('ErrorMessage.EMAIL')}</Text>
            ) : null}

          </View>
          <View style={Gutters.inputText1}>
            <TextInput
              style={[Gutters.textInput, Common.textInput, Fonts.textInput]}
              placeholder={t('placeholder.PASSWORD')}
              value={password}
              onChangeText={(text) => checkPasswordValidity(text)}
              underlineColorAndroid='transparent'
              secureTextEntry={true}
            />
            {checkValidPass ? (
              <Text style={globalstyles.Errormsg}>{t('ErrorMessage.PASSWORD')}</Text>
            ) : null}
          </View>
          <View>
            <TouchableOpacity
              style={[Gutters.button, Common.button]}
              //onPress={() => navigation.navigate(navigations.HOME_SCREEN)}
              onPress={() => userCheck()}
              disabled={(checkValidEmail == true) || (checkValidPass == true) || (email == "") || (password == "")}
            >
              <Text style={globalstyles.buttonText}>{t('screenText.LOG_IN')}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={Gutters.footer}>
            <Text
              onPress={() => navigation.navigate(navigations.FORGOT_SCREEN)}
              style={[Gutters.footer1, Common.footer1, Fonts.footer1]}
            >
              {t('Signup.FORGOT_PASSWORD')}
            </Text>
            <Text

              onPress={() => navigation.navigate(navigations.SIGNUP_SCREEN)}
              style={[Gutters.footer2, Common.footer2, Fonts.footer2]}
            >
              {t('Signup.CREATE_ACCOUNT')}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

