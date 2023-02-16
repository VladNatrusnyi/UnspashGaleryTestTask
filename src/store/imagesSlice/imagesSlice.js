import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosRequest from "../axios/axiosRequest";
import { CONSTANTS } from "../../helpers/constants";

const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    images: [],
    isLoading: false,
    moreLoading: false,
    isError: false,
    isListEnd: false,

  },
  reducers: {
    setIsLoad(state, action) {
      state.isLoading = action.payload
    },
    setIsMoreLoad(state, action) {
      state.moreLoading = action.payload
    },
    setIsError(state, action) {
      state.isError = action.payload
    },
    setImages(state, action) {
      state.images = state.images.concat(...action.payload)
    },

    setPage(state, action) {
      state.page = action.payload
    },
    setIsListEnd(state, action) {
      state.isListEnd = action.payload
    },
  },
})

export const {
  setIsLoad,
  setImages,
  setIsError,
  setIsMoreLoad,
  setIsListEnd

} = imagesSlice.actions

export default imagesSlice.reducer

export const getImages = createAsyncThunk(
  'images/getImages',
  async (page, {dispatch, getState }) => {
    dispatch(setIsError(false))

    page === 1 ? dispatch(setIsLoad(true)) : dispatch(setIsMoreLoad(true))

    console.log('moreLoading', getState().images.moreLoading)

      axiosRequest.get(`photos?page=${page}&client_id=${CONSTANTS.clientId}`)
        .then(function (response) {
          dispatch(setImages(response.data))
          response.data.length === 0 ? setIsListEnd(true) : setIsListEnd(false)
          dispatch(setIsLoad(false))
          dispatch(setIsMoreLoad(false))
        })
        .catch(function (error) {
          dispatch(setIsError(true))
          dispatch(setIsLoad(false))
          dispatch(setIsMoreLoad(false))
          console.log('Помилка завантаження',error);
        });

  }
)
