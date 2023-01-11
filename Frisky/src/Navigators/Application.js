import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { StartupContainer } from '@/Containers'
import { useTheme } from '@/Hooks'
import { navigationRef } from './utils'
import LogForm from '@/Containers/Screens/SignIn/SignIn'
import SignUp from '@/Containers/Screens/SignUp/SignUp'
import Forget from '@/Containers/Screens/ForgetPassword/ForgetPassword'
import MainScreen from '@/Containers/Screens/DashBoard/MainHome/Main'
import Change from '@/Containers/Screens/ChangePassword/ChangePassword'
import { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'

const Stack = createStackNavigator()
// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 2000)
  }, [])

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup" component={StartupContainer} />
          <Stack.Screen
            name="SignIn"
            component={LogForm}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="ForgetPassword"
            component={Forget}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="ChangePassword"
            component={Change}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
