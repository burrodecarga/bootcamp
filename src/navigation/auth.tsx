import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignIn from "../screens/SignIn"
import SignUp from "../screens/SignUp"

type AuthStackParamList = {
  SignIn: undefined
  SignUp: undefined
}
const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SignIn' component={SignIn} />
      <Stack.Screen name='SignUp' component={SignUp} />
    </Stack.Navigator>
  )
}

export default AuthStack
