import {configureStore, type EnhancedStore} from "@reduxjs/toolkit";
import darkLightThemeReducer from "../features/darkLightTheme/darkLightThemeSlice";


const reduxStore: EnhancedStore = configureStore({
    reducer: {
        darkLightTheme: darkLightThemeReducer,
    },
})


export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;


export default reduxStore;


// To Learn more, visit (https://redux-toolkit.js.org/rtk-query/usage/queries).
