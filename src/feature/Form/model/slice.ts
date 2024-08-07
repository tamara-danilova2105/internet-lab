import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from '@/app/providers/store/store'

export interface Form {
    username: string;
    phone: string;
};

const initialState: Form = {
    username: '',
    phone: '',
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setDataForm: (state, action: PayloadAction<{ name: keyof Form, value: string }>) => {
            const { name, value } = action.payload; 
            state[name] = value;
        },
    },
});

export const { setDataForm } = formSlice.actions;
export const getDataForm = (state: RootState) => state.form;
export default formSlice.reducer;
