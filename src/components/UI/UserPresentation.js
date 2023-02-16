import { Image, StyleSheet, Text, View } from "react-native";

export const UserPresentation = ({url, name}) => {
  return (
    <View style={styles.userWrapper}>
      <Image
        style={styles.userImage}
        source={{
          uri: url,
        }}
      />
      <Text style={styles.userName}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  userWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },

  userImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 20
  },

  userName: {
    fontSize: 18,
    fontWeight: 'bold'
  },

})

