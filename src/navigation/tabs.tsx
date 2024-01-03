import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MainStack from "./main"
import ShopStack from "./shop"
import DrawerNavigator from "./drawer"

import { Image } from "react-native"



const Tab = createBottomTabNavigator()
const HomeIcon = require('../../assets/casa.png')
const HomeIcon1 = require('../../assets/casa_1.png')

const ShopIcon = require('../../assets/shopping.png')
const ShopIcon1 = require('../../assets/shopping_1.png')

const AcountIcon = require('../../assets/acount.png')
const AcountIcon1 = require('../../assets/acount1.png')


const TabNavigator = () => {
  return (<Tab.Navigator screenOptions={{
    headerShown: false
  }}>
    <Tab.Screen name="MainStack" component={MainStack} options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused, color, size }) => <Image width={24} height={24} source={focused ? HomeIcon1 : HomeIcon} />
    }} />
    <Tab.Screen name="ShopStack" component={ShopStack}
      options={{
        tabBarLabel: 'Shop',
        tabBarIcon: ({ focused, color, size }) => <Image width={24} height={24} source={focused ? ShopIcon1 : ShopIcon} />
      }}
    />
    <Tab.Screen name="DrawerNavigator" component={DrawerNavigator}
      options={{
        tabBarLabel: 'Acount',
        tabBarIcon: ({ focused, color, size }) => <Image width={24} height={24} source={focused ? AcountIcon1 : AcountIcon} />
      }}
    />
  </Tab.Navigator>)
}

export default TabNavigator
