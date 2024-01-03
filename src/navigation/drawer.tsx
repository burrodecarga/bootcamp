import {
  createDrawerNavigator, DrawerContentComponentProps,
  DrawerContentScrollView, DrawerItem, DrawerItemList
} from "@react-navigation/drawer"
import { Image, StyleSheet, Text, View } from "react-native"
import LoginIcon from "../components/icons/log-in"
import LogoutIcon from "../components/icons/log-out"
import ProfileIcon from "../components/icons/profile"
import SettingIcon from "../components/icons/setting"
import { useAutentication } from "../featrures/auth/hooks/useAutentication"
import ProfileScreen from "../screens/ProfileScreen"
import SettingScreen from "../screens/SettingScreen"


type RootDrawerParamList = {
  Profile: undefined
  Setting: undefined
}

const style = StyleSheet.create({
  drawerItemLabel: {
    fontWeight: '600',
    fontSize: 14
  },
  headerImage: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 120,
    backgroundColor: 'red'
  },
  imageContainer: {

  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  }

})

const Drawer = createDrawerNavigator<RootDrawerParamList>()

const CustomDrawer = (props: DrawerContentComponentProps) => {

  const { sigOut } = useAutentication()

  const handlerSignOut = () => {
    sigOut()
  }
  return (
    <DrawerContentScrollView {...props}>
      <View style={style.headerImage}>
        <View style={style.imageContainer}>
          <Image style={style.image} source={{ uri: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
        </View>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        icon={() => <LogoutIcon width={24} height={24} color='#000000' />}
        label={() => <Text style={style.drawerItemLabel}>Logout</Text>}
        onPress={handlerSignOut}
      />
    </DrawerContentScrollView>
  )
}



const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Profile" component={ProfileScreen}
        options={{
          drawerIcon: () => <ProfileIcon width={24} height={24} color='#000000' />
        }} />
      <Drawer.Screen name="Setting" component={SettingScreen} options={{
        drawerIcon: () => <SettingIcon width={24} height={24} color='#000000' />
      }} />
    </Drawer.Navigator>
  )

}

export default DrawerNavigator
