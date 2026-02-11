import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isOpen: boolean;
  name: string | null;
}

const initialState: ModalState = {
  isOpen: false,
  name: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<{ name: string }>) => {
      state.isOpen = true;
      state.name = action.payload.name;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.name = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
