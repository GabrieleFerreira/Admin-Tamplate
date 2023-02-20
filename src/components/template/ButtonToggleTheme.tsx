import { IconMon, IconSun, Lougout} from "../icons";

interface ButtonToggleThemeProps {
    theme:string
    toggleTheme: () => void
}
export default function ButtonToggleTheme(props: ButtonToggleThemeProps) {
   return props.theme === " " ? (
    <div onClick={props.toggleTheme} className='bg-gradient-to-r
    hidden sm:flex items-center cursor-pointer
    from-yellow-300 to-yellow-600 
     w-14 lg:w-24 h-8 p-1 rounded-full'>
        
    <div className='flex items-center justify-end
    bg-white text-yellow-600 w-6 h-6 rounded-full'>
    {IconSun(6)}
    </div>
        
    <div className='hidden lg:flex items-center mr-3 
        text-gray-300'>
        <span className='text-sm'>Claro</span>
    </div>
    </div>
   ) :(
        <div onClick={props.toggleTheme} className='bg-gradient-to-r
        hidden sm:flex items-center cursor-pointer
        from-gray-500 to-gray-900 
        w-14 lg:w-24 h-8 p-1 rounded-full'>
        <div className='hidden lg:flex items-center mr-2 
        text-white'>
            <span className='text-sm' >Escuro</span>
        </div>
        <div className='flex items-center justify-end
        bg-black text-yellow-600 w-6 h-6 rounded-full'>
            {IconMon(6)}
        </div>
        
    </div>
   )
}