import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { useGetImageQuery } from "../store/unsplashApi/unspashApi";
import { Preloader } from "../components/UI/Preloader";
import { UserPresentation } from "../components/UI/UserPresentation";

export const ImgScreen = ({ route }) => {
  const navigation = useNavigation()
  const { imgId } = route.params;

  const {data, isLoading, isError  } = useGetImageQuery(imgId, {
    skip: !imgId
  })

  const imgData = data && {
    url: data.urls.regular,
    description: data.alt_description,
    user: {
      name: data.user.name,
      photoUrl: data.user.profile_image.small
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: () => imgData && <UserPresentation url={imgData.user.photoUrl} name={imgData.user.name}/> ,
    });
  }, [navigation, imgData]);

  if (isError) {
    return (
      <Text>Виникла помилка</Text>
    )
  }

  return (
    <>
      {
        isLoading
          ? <Preloader />
          : imgData
            ? <View style={{flex: 1}}>
              <Image
                style={{width: '100%', height: '100%', objectFit: 'contain'}}
                source={{
                  uri: imgData.url,
                }}
              />
            </View>
            : <Text>Не порядок</Text>
      }
    </>
  )
}
