import { configureStore } from '@reduxjs/toolkit';
import form from '@/feature/Form/model/slice'

export const store = configureStore({
    reducer: {
        form,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;