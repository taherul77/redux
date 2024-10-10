import { createSlice } from "@reduxjs/toolkit";

interface MainState {
	add: boolean;
	val:any
}

const initialState: MainState = {
	add: false,
	val:[]
};

export const MainSlice = createSlice({
	name: "Initial",
	initialState,
	reducers: {
		handleAddModalOpen: (state) => {
			state.add = true;
		},
		rowValue: (state, action) => {
			state.val = action.payload;
		  },
	},
});

export const { handleAddModalOpen,rowValue } = MainSlice.actions;

export default MainSlice.reducer;

export type RootState = {
	Initial: MainState;
};
