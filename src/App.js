import React from 'react'
import { registerRootComponent } from 'expo'
import { StyleSheet, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import routes from "~/routes"

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

const Tab = createBottomTabNavigator()
const tabBarOptions = {
  activeTintColor: "#E89A55",
  inactiveTintColor: "#5C5C5C",
  style: styles.barStyle,
  labelStyle: styles.labelStyle,
  tabStyle: styles.tabStyle
}
const tabScreenOptions = {
  tabBarIcon: ({ color }) => (
    <MaterialIcons
      name={route.icon}
      size={iconSize}
      color={color}
    />
  )
}

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={tabBarOptions}
      >
        {routes.map(route => (
          <Tab.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={tabScreenOptions}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
)

export default registerRootComponent(App)