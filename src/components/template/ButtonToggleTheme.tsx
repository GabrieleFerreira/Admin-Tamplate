import { IconSun, Lougout, Sun } from "../icons";

interface ButtonToggleThemeProps {
    theme: string;
    toggleTheme: () => void
}
export default function ButtonToggleTheme(props: ButtonToggleThemeProps) {
   return props.theme === "dark" ? (
    <div onClick={props.toggleTheme} className = ''>
        <div className="">
            {IconSun}
        </div>
        <div className="">
            <span>Claro</span>
        </div>
    </div>
   ) :(
        <div>
            
        </div>
   )
}