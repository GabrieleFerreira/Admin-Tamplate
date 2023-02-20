import exp from "constants";
import { createContext, useEffect, useState } from "react";


interface AppContextProps {
    theme?: string
    toggleTheme?: () => void
    children?: any
}

const AppContext = createContext<AppContextProps>({
    
})
//verificar o erro do props
export function  AppProvider(props: AppContextProps){
    //const[theme,setTheme] = useState<>('dark')
    const[theme,setTheme] = useState('dark')
    
    function toggleTheme(){
       const newtheme = theme === ' ' ? 'dark' : ' '
       setTheme(newtheme)
       localStorage.setItem('theme', newtheme)
    
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        setTheme(savedTheme)
    }, [])
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
