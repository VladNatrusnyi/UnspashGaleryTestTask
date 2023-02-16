import { ActivityIndicator, Text, View, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../store/imagesSlice/imagesSlice";
import { ImgListItem } from "./ImgListItem";
import { Preloader } from "./UI/Preloader";

export const ImgList = () => {
  const dispatch = useDispatch()

  const [page, setPage] = useState(1)

  const images = useSelector(state => state.images.images)
  const isLoading = useSelector(state => state.images.isLoading)
  const isListEnd = useSelector(state => state.images.isListEnd)
  const moreLoading = useSelector(state => state.images.moreLoading)


  useEffect(() => {
    page && dispatch(getImages(page))
  }, [page])

  const ItemView = ({item}) => {
    const imgData = {
      id: item.id,
      url: item.urls.regular,
      description: item.alt_description,
      user: {
        name: item.user.name,
        photoUrl: item.user.profile_image.small
      }
    }
    return (
      <View style={{ marginHorizontal: 20}}>
        <ImgListItem imgData={imgData} />
      </View>
    );
  };


  const renderHeader = (
    <Text style={styles.title}>Unsplash</Text>
  )

  const renderFooter = (
    <View style={styles.footerText}>
      {moreLoading && <ActivityIndicator/>}
      {isListEnd && <Text>No more articles at the moment</Text>}
    </View>
  )

  return (
    <>
      {
        isLoading ?
          <Preloader />
          :
        images && images.length ?
          <View style={{flex: 1}}>

            <FlatList
              keyExtractor={item => `${item.id}-${Math.random()}`}
              data={images}
              renderItem={ItemView}
              ListHeaderComponent={renderHeader}
              ListFooterComponent={renderFooter}
              onEndReachedThreshold={0.2}
              onEndReached={() => setPage(page + 1)}
            />
          </View>
          :
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Немає доступних зображень</Text>
          </View>
      }
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    marginVertical: 15,
    marginHorizontal: 10
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  emptyText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
