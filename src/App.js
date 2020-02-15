import React from 'react'
import { registerRootComponent } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from "~/screens/Home"
import Calendar from "~/screens/Calendar"

const Tab = createBottomTabNavigator()
const routes = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: 'ios-home'
  },
  {
    name: 'Calendar',
    component: Calendar,
    icon: 'ios-calendar'
  }
]

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          style: {
            height: 100,
            paddingTop: 10
          },
          labelStyle: {
            fontSize: 16,
            margin: 0,
            padding: 0,
          },
          activeTintColor: '#2A7BF6',
        }}
      >
        {routes.map(route => (
          <Tab.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name={route.icon} color={color} size={30} />
              )
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
)

export default registerRootComponent(App)