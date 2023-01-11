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

//Data
export var details = [{

  "email": 'varshini@gmail.com',
  "password": 'Varshini@123',
  "ConfirmPassword": 'Varshini@123',
  "Name": 'varshini',

},
{

  "email": 'sri@gmail.com',
  "password": 'Sri@123456',
  "ConfirmPassword": 'Sri@123456',
  "Name": 'sri'

}]

export default function SignUp({ navigation }) {
  //Intialization
  const [checkValidName, setCheckValidateName] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkValidEmail, setCheckValidateEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [checkValidPass, setCheckValidPass] = useState(false);
  const [confirm, setPass] = useState("");
  const [checkValidConfirm, setCheckValidConfirm] = useState(false);
  const [t] = useTranslation()
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

  //Name Validation
  const NameValid = (text) => {
    setName(text);
    if (Validation.validateName(name)) {
      setCheckValidateName(false);
    } else {
      setCheckValidateName(true);
    }
  };

  //Email Validation
  const checkEmail = (text) => {
    setEmail(text);
    if (Validation.validateEmail(email)) {
      setCheckValidateEmail(false);
    } else {
      setCheckValidateEmail(true);
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

  //Confirm Password Validation
  const checkConfirmPasswordValidity = (text) => {
    setPass(text);
    if (password == text) {
      setCheckValidConfirm(false);
    } else {
      setCheckValidConfirm(true);
    }
  };

  const onhandle = () => {
    if (details = [...details, { "Name": name, "email": email, "password": password, "ConfirmPassword": confirm }]) {
      navigation.navigate(navigations.SIGNIN_SCREEN, { paramKey: details });
    }
  }

  //Rendering
  return (
    <ImageBackground
      source={require("../../../Image/background.jpg")}
      style={[Gutters.imageBackground, Common.imageBackground]}
      resizeMode="cover"
    >
      <View style={globalstyles.container}>
        <StatusBar
          translucent
          backgroundColor="black"
          barStyle="light-content"
        />
        <Text style={[Common.header, Fonts.header]}>{t('Signup.WELCOME')}</Text>
        <View>
          <Image
            style={globalstyles.image}
            source={require("../../../Image/music-note.png")}
          />
        </View>
        <View style={[Gutters.signup_inputText, Fonts.signup_inputText]}>
          <TextInput
            style={[Gutters.signup_textInput, Fonts.signup_textInput, Common.signup_textInput]}
            placeholder={t('placeholder.NAME')}
            value={name}
            onChangeText={(text) => NameValid(text)}
            underlineColorAndroid={"transparent"}
          />
          {checkValidName ? (
            <Text style={globalstyles.Errormsg}>{t('ErrorMessage.NAME')}</Text>
          ) : null}
          <TextInput
            style={[Gutters.signup_textInput, Fonts.signup_textInput, Common.signup_textInput]}
            placeholder={t('placeholder.EMAIL')}
            value={email}
            onChangeText={(text) => checkEmail(text)}
            underlineColorAndroid={"transparent"}
          />
          {checkValidEmail ? (
            <Text style={globalstyles.Errormsg}>{t('ErrorMessage.EMAIL')}</Text>
          ) : null}
          <TextInput
            style={[Gutters.signup_textInput, Fonts.signup_textInput, Common.signup_textInput]}
            placeholder={t('placeholder.PASSWORD')}
            value={password}
            onChangeText={(text) => checkPasswordValidity(text)}
            secureTextEntry={true}
            underlineColorAndroid={"transparent"}
          />
          {checkValidPass ? (
            <Text style={globalstyles.Errormsg}>{t('ErrorMessage.PASSWORD')}</Text>
          ) : null}
          <TextInput
            style={[Gutters.signup_textInput, Fonts.signup_textInput, Common.signup_textInput]}
            placeholder={t('placeholder.CONFIRM')}
            value={confirm}
            onChangeText={(text) => checkConfirmPasswordValidity(text)}
            secureTextEntry={true}
            underlineColorAndroid={"transparent"}
          />
          {checkValidConfirm ? (
            <Text style={globalstyles.Errormsg}>
              {t('ErrorMessage.CONFIRMPASSWORD')}
            </Text>
          ) : null}
          <TouchableOpacity
            style={[Gutters.signup_button, Common.signup_button]}
            onPress={() => onhandle()}
            //  onPress={() => navigation.navigate(navigations.HOME_SCREEN)}
            disabled={(checkValidEmail == true) || (checkValidPass == true)
              || (password == "") || (email == "") || (checkValidName == true)
              || (name == "") || (checkValidConfirm == true) || (confirm == "")}
          >
            <Text style={globalstyles.buttonText}>{t('Signup.SIGNUP')}
            </Text>
          </TouchableOpacity>
          <Text
            onPress={() => navigation.navigate(navigations.SIGNIN_SCREEN)}
            style={[Gutters.signup_footer, Fonts.signup_footer, Common.signup_footer]}
          >
            {t('Signup.SIGNIN')}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

