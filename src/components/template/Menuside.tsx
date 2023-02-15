import { IconAdjustment, IconBell, IconeHome, IconSun, Lougout } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function Menuside() {
    return (
        <aside className="
        bg-gray-200 text-gray-900
         flex flex-col ">
            <div className="flex flex-col items-center  justify-center 
            bg-gradient-to-tr from-indigo-500  to-purple-800  h-20 w-20" >
                <Logo/>
            </div>
            <ul className="flex-grow">
                <MenuItem url="" text="Início" icon={IconeHome}></MenuItem>
                <MenuItem url="settings" text="Ajuste" icon={IconAdjustment}></MenuItem>
                <MenuItem url="notifications" text="Notificações" icon={IconBell}></MenuItem>
                
                
            </ul>
            <ul><MenuItem url="" text="Sair" icon={Lougout} onClick={()=> console.log("lougout")} className="
            text-red-600 hover:bg-red-400
            dark:hover:text-red-600 dark:hover:bgw"></MenuItem>
            </ul>
        </aside>
    )
}