import { createSlice } from "@reduxjs/toolkit";

interface ElementState {
  elements: { id: string; color: string }[];
}

const initialState: ElementState = {
  elements: [],
};

const elementSlice = createSlice({
  name: "elements",
  initialState,
  reducers: {
    addElement: (state) => {
      const newElement = {
        id: Math.random().toString(36),
        color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      };
      state.elements.unshift(newElement);
    },
    removeElement: (state) => {
      state.elements.pop();
    },
  },
});

export const { addElement, removeElement } = elementSlice.actions;
export default elementSlice.reducer;
