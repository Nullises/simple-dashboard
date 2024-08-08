import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 0,
  isReady: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return;
      state.count = action.payload;
      state.isReady = true;
    },
    addOne(state, action: PayloadAction<number>) {
      const incrementBy = action.payload !== undefined ? action.payload : 1;
      state.count += incrementBy;
    },
    substractOne(state, action: PayloadAction<number>) {
      const decrementBy = action.payload !== undefined ? action.payload : 1;
      state.count -= decrementBy;
    },
    resetCounter(state) {
      state.count = 0;
    },
  },
});

export const { substractOne, addOne, resetCounter, initCounterState } =
  counterSlice.actions;

export default counterSlice.reducer;
