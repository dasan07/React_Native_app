/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'


/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ color, ...args }) {
  return StyleSheet.create({
    //Signin page
    header: {
      color: color.WHITE,
    },
     //create a new account text styles
    footer2: {
      color: color.WHITE,
    },
     //login button styles
    button: {
      backgroundColor: color.AQUA,
    },
    //email and password textinput styles
    textInput: {
      backgroundColor:color.SILVER,
      borderLeftColor: color.AQUA,
    },
     //forgotpassword text styles
    footer1: {
      color: color.WHITE,
    },
    //Home page
    itemText: {
      color: color.BLACK,
    },
    //section header styles
    sectionHeader: {
      color: color.BLACK,
    },
    //parent styles
    container: {
      backgroundColor: color.WHITE,
    },
    //Header page
    Over: {
      backgroundColor: color.AQUA,
    },
    //header styles
    Center: {
      backgroundColor: color.AQUA,
    },
    //parent styles
    back_container: {
      backgroundColor: color.AQUA
    },
    // signup style
    //name,email,password and confirmpassword textinput styles
    signup_textInput: {
     borderLeftColor: color.AQUA,
      backgroundColor: color.SILVER,
    },
    //signup button styles
    signup_button: {
      backgroundColor: color.AQUA,
    },
    //login user text styles
    signup_footer: {
      color: color.WHITE,
    },
    //Account styles
    sub_container: {
      backgroundColor: color.WHITE,
    },
    //logout button text styles
    buttontext: {
      color: color.BLACK,
    },
    //forgotpassword title styles
    forgot_title: {
      color: color.WHITE,
    },
    //email textinput styles
    forgot_textInput: {
      borderColor: color.AQUA,
      backgroundColor: color.SILVER,
    },
    //send button styles
    forgot_button: {
      backgroundColor: color.AQUA,
    },
    //change password title styles
    change_title: {
      color: color.WHITE,
    },
    //password and confirmpassword textinput styles
    change_textInput: {
      borderColor: color.AQUA,
      backgroundColor: color.SILVER,
    },
    //savechanges button styles
    change_button: {
      backgroundColor: color.AQUA,
    },
  })
}
