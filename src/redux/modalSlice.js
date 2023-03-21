import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  selectedContinent: null,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true
    },
    closeModal: (state, action) => {
      state.isOpen = false
    },
    selectContinent: (state, action) => {
      state.selectedContinent = action.payload
    },
    clearContinent: (state) => {
      state.selectedContinent = null
    },
  },
})

export default modalSlice.reducer
export const { openModal, closeModal, selectContinent,clearContinent } = modalSlice.actions;
export const selectSelectedContinent = (state) => state.modal.selectedContinent;