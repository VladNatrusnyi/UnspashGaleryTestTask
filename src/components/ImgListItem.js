import { TouchableOpacity, View, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserPresentation } from "./UI/UserPresentation";

export const ImgListItem = ({imgData}) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate('ImageScreen', {
          imgId: imgData.id,
        });
      }
      }
    >
      <View style={styles.image}>
        <UserPresentation url={imgData.user.photoUrl} name={imgData.user.name}/>

        <Image
          style={styles.tinyLogo}
          source={{
            uri: imgData.url,
          }}
        />

        <Text>{imgData.description}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    padding: 15,
    borderWidth: 5,
    borderColor: 'lightgray',
    borderRadius: 5,
    marginBottom: 10
  },
  tinyLogo: {
    width: '100%',
    height: 200,
    marginVertical: 10
  },
})
