import exp from "constants";
import { createContext, useState } from "react";

type Theme = 'dark'; ' '
interface AppContextProps {
    theme?: Theme
    toggleTheme?: () => void
}

const AppContext = createContext<AppContextProps>({
    
})
//verificar o erro do props
export function  AppProvider(props){
    const[theme,setTheme] = useState<Theme>('dark')
    
    function toggleTheme(){
        setTheme(theme === " " ? "dark" : " ")
    console.log("funcionando")
    }
    return (
        <AppContext.Provider value={{
            theme,
            toggleTheme

        }}>
            {props.children}
        </AppContext.Provider>
        
    )
}
export default AppContext
