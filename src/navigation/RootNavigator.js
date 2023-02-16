import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListScreen } from "../screens/ListScreen";
import { ImgScreen } from "../screens/ImgScreen";

const Stack = createNativeStackNavigator();

export const RootNavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"ListScreen"} screenOptions={{ headerShown: false }} >
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="ImageScreen" component={ImgScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
