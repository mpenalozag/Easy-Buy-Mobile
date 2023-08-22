import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';

import Home from "./Home";
import Cart from "./Cart";
import Scanner from "./Scanner";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Inicio') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Carro') {
            iconName = focused ? 'shopping-cart' : 'shopping-cart';
          } else if (route.name === 'Escanear') {
            iconName = focused ? 'camera' : 'camera';
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: 'gray',
        tabBarLabel: () => {
          return null;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name={"Inicio"} component={Home} />
      <Tab.Screen name={"Escanear"} component={Scanner} />
      <Tab.Screen name={"Carro"} component={Cart} />
    </Tab.Navigator>
  )
}