import React from 'react'
import { registerRootComponent } from 'expo'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from "~/screens/Home"
import Calendar from "~/screens/Calendar"

const Tab = createBottomTabNavigator()
const routes = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: 'home'
  },
  {
    name: 'Calendar',
    component: Calendar,
    icon: 'today'
  }
]

const iconSize = 28
const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: "#FFFFFF",
    height: Platform.OS === "android" ? 60 : 100
  },
  labelStyle: {
    fontSize: 14,
  },
  tabStyle: {
    paddingTop: 10,
    paddingBottom: Platform.OS === "android" ? 5 : 0
  }
})

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "#E89A55",
          inactiveTintColor: "#5C5C5C",
          style: styles.barStyle,
          labelStyle: styles.labelStyle,
          tabStyle: styles.tabStyle
        }}
      >
        {routes.map(route => (
          <Tab.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons
                  name={route.icon}
                  size={iconSize}
                  color={color}
                />
              )
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
)

export default registerRootComponent(App)