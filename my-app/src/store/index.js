import { configureStore } from '@reduxjs/toolkit'
import localeSlice from "./localeSlice/localeSlice";

export const store = configureStore({
    reducer: {
        locale: localeSlice
    },
})