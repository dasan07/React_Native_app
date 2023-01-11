import { StyleSheet } from 'react-native'

/**
 * Generate Styles depending on MetricsSizes vars availabled at ./Theme/Variables
 * Styles are like :
 * <size><direction><op>: {
 *    <op><direction>: <value>
 * }
 * where:
 * <size>: is the key of the variable included in MetricsSizes
 * <direction>: can be ['Bottom','Top','Right','Left','Horizontal','Vertical']
 * <op>: can be ['Margin', 'Padding']
 * <value>: is the value of the <size>
 */
import { color } from '@/Utility/Constants'
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ MetricsSizes }) {
  return StyleSheet.create({
    //Signin Page
    //Screen Total Items Styles
    itemContainer: {
      marginTop: 80,
      margin: 50,
    },
    //Inputtext Styles
    inputText1: {
      marginTop: 40,
    },
    //Footer Text Styles
    footer: {
      paddingTop: 25,
      alignItems: "center",
    },
    //Forgotpassword Text Styles
    footer1: {
      paddingTop: 30,
    },
    //Create a New Account Text Styles
    footer2: {
      paddingTop: 10,
    },
    //Email and Password Textinput Styles
    textInput: {
      height: 60,
      borderRadius: 25,
      borderLeftWidth: 15,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 30,
      width: 300,
    },
    //Login Button Styles
    button: {
      alignItems: "center",
      paddingTop: 10,
      backgroundColor: color.BLUE,
      borderRadius: 25,
      marginTop: 50,
      width: 300,
      height: 60,
    },
    //Home Page
    itemPhoto: {
      width: 150,
      height: 150,
      borderRadius: 10,
    },
    //All Item Styles
    item: {
      margin: 10,
    },
    //Section Header Styles
    sectionHeader: {
      marginTop: 20,
      marginBottom: 5,
    },
    //Parent Styles
    container: {
      flex: 1,
    },
    //Header pPge
    //Header Styles
    Center: {
      marginTop: 50,
      margin: 10,
      height: 60,
      paddingStart: 15,
      paddingEnd: 15,
      flexDirection: 'row',
      justifyContent: "space-between",
    },
    //Logo Styles
    Icon: {
      height: 40,
      width: 40,
      paddingRight: 10,
    },
    //Icon Styles
    Icon1: {
      height: 30,
      width: 30,
    },
    imageBackground: {
      height: "100%",
      width: "100%",
    },
    //Signup Page
    //Page Title Styles
    signup_header: {
      marginTop: 20,
    },
    //Inputtext Styles
    signup_inputText: {
      marginTop: 20,
    },
    //Name,Email,Password and Confirmpassword Textinput Styles
    signup_textInput: {
      height: 60,
      marginTop: 20,
      marginBottom: 5,
      borderWidth: 1,
      borderLeftWidth: 15,
      paddingLeft: 30,
      borderRadius: 25,
      width: 300,
    },
    //Signup Button Styles
    signup_button: {
      marginTop: 20,
      borderRadius: 25,
      paddingTop: 10,
      height: 60,
    },
    //Login User Text Styles
    signup_footer: {
      paddingTop: 20,
    },
    //Account Styles
    sub_container: {
      height: "100%",
      width: "100%",
      justifyContent: "center",
    },
    //Button Style 
    acc_button: {
      padding: 15,
      borderRadius: 25,
    },
    //Forgotpassword Screen Total Styles
    forgot_header: {
      marginTop: 100,
      margin: 50,
    },
    //Forgotpassword Title Styles
    forgot_title: {
      marginTop: 30,
    },
    //Inputtext Styles
    forgot_input: {
      margin: 10,
    },
    //Email Textinput Styles
    forgot_textInput: {
      height: 60,
      marginLeft: 5,
      borderColor: color.BLUE,
      borderLeftWidth: 15,
      paddingLeft: 20,
      borderRadius: 25,
      marginTop: 50,
      width: 300,
    },
    //Send Button Styles
    forgot_button: {
      padding: 10,
      marginTop: 50,
      borderRadius: 25,
      height: 60,
    },
    //Change Password Title Styles
    change_title: {
      marginTop: 30,
      marginBottom: 30
    },
    //Input Text Box 1 Styles
    change_inputtext1: {
      marginTop: 60,
    },
    //Input Text Box 2 Styles
    change_inputtext2: {
      paddingTop: 30,
    },
    //Password and Confirmpassword Textinput Styles
    change_textInput: {
      height: 60,
      borderColor: color.BLUE,
      borderLeftWidth: 15,
      paddingLeft: 30,
      borderRadius: 25,
      width: 300,
    },
    //Savechanges Button Styles
    change_button: {
      marginTop: 60,
      height: 60,
      borderRadius: 25,
      width: 300,
      paddingTop: 10,
    },
  })
}
