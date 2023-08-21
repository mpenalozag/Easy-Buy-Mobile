import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./app/Home";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}