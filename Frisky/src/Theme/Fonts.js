/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ }) {
  return StyleSheet.create({
    //Signin page
    //forgotpassword text styles
    footer1: {
      fontSize: 20,
      fontWeight: "bold",
    },
    //create a new account text styles
    footer2: {
      fontSize: 20,
      fontWeight: "bold",
    },
    header: {
      fontWeight: "bold",
      fontSize: 28,
      textAlign: "center"
    },
    //email and password textinput styles
    textInput: {
      fontSize: 20,
      fontWeight:"bold"
    },
    //Home page
    itemText: {
      marginTop: 5,
      fontSize: 13,
      textAlign: "center",
    },
    //section header styles
    sectionHeader: {
      fontWeight: "800",
      fontSize: 25,
      alignItems: "center",
      textAlign: "center",
    },
    //header styles
    Center: {
      alignItems: 'flex-end',
      fontSize: 20,
    },
    //signup style
    //page title styles
    signup_header: {
      marginTop: 20,
    },
    //inputtext styles
    signup_inputText: {
      marginTop: 20,
    },
    //name,email,password and confirmpassword textinput styles
    signup_textInput: {
      fontWeight:"bold",
      fontSize: 20,
    },
    //login user text styles
    signup_footer: {
      fontSize: 20,
      fontWeight: "bold",
      alignItems: "center",
      textAlign: "center",
    },
    //Account styles
    //logout button text styles
    buttontext: {
      fontSize: 30,
    },
    sub_container: {
      alignItems: "center",
    },
    acc_button: {
      marginTop: 100,
       margin: 110,
    },
    //forgotpassword screen total styles
    forgot_header: {
      alignItems: "center",
    },
    //forgotpassword title styles
    forgot_title: {
      fontSize: 30,
      fontWeight: "bold",
    },
    //email textinput styles
    forgot_textInput: {
      fontSize: 20,
      fontWeight: "bold",
    },
    //send button styles
    forgot_button: {
      alignItems: "center",
    },
    //change password title styles
    change_title: {
      fontSize: 30,
      fontWeight: "bold",
    },
    //password and confirmpassword textinput styles
    change_textInput: {
      fontSize: 20,
      fontWeight: "bold",
    },

  })
}
