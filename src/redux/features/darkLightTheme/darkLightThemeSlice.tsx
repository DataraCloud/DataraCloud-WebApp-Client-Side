import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "../../store/reduxStore.tsx";



// [2] Define the interface for the theme object
interface ThemeInterface {
    isDark: boolean;
    source: string;
}



// [3] Helper function to get the initial theme from localStorage, or default to light theme if nothing in localStorage
const getInitialTheme = (): ThemeInterface => {
    const savedTheme = localStorage?.getItem("dc_theme");
    if (savedTheme) {
        const parsedTheme = JSON.parse(savedTheme);
        return {
            isDark: parsedTheme.isDark, // Use saved isDark value
            source: parsedTheme.source, // Use saved source
        };
    }

    // [4] Default to light theme if nothing in localStorage
    const defaultTheme = { isDark: false, source: "default" };
    localStorage.setItem("dc_theme", JSON.stringify(defaultTheme));
    return defaultTheme;
};



// [1] Creating a slice for darkLightTheme, defining the initial state and creating a reducer
const darkLightThemeSlice = createSlice({
    name: "darkLightTheme",
    initialState: getInitialTheme(),
    reducers: {
        toggleDarkLightTheme: (state) => {
            state.isDark = !state.isDark; // Toggle theme
            state.source = "user-preference"; // Update source
            localStorage.setItem("dc_theme", JSON.stringify({ isDark: state.isDark, source: state.source })); // Save the full object
        },
    }
})



export const selectTheme = (state: RootState) => {
    return state.darkLightTheme.isDark;
};



export const {toggleDarkLightTheme} = darkLightThemeSlice.actions;



export default darkLightThemeSlice.reducer;
