import useAppData from "@/src/data/hook/useAppData"
import AvatarUser from "../AvatarUser"
import { IconSun } from "../icons"
import ButtonToggleTheme from "./ButtonToggleTheme"
import Title from "./Title"

interface HeaderProps {
    title: string
    caption: string
}

//Rever a logica do dark
export default function Header(props: HeaderProps) {
    const {theme, toggleTheme} = useAppData()
    return (
        <div className="flex ">
           <Title title = {props.title} caption= {props.caption}/>
           <div className="flex flex-grow justify-end items-center">
                <ButtonToggleTheme theme={theme} toggleTheme={toggleTheme}/>
                <AvatarUser></AvatarUser>
           </div>
        </div>
    )

}