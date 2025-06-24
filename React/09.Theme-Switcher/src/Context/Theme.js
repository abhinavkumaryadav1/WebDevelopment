import { createContext, useContext } from "react";

export  const ThemeContext = createContext({
    themeMode :"light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
});

/*what we did id we did all the word of export and creating method for seta set and data retrival in this same file and whenever we want 
to append any data aur retrive any data we can do the same work from themeProvider and useTheme */
export const ThemeProvider = ThemeContext.Provider 
export default function useTheme(){
return useContext(ThemeContext)
}