import { ActivityIndicator, View } from "react-native";

export const Preloader = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={'large'}/>
    </View>
  )
}
