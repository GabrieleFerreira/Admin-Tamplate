import Title from "./Title"

interface HeaderProps {
    title: string
    caption: string
}
export default function Header(props: HeaderProps) {
    
    return (
        <div>
           <Title title = {props.title} caption= {props.caption}/>
        </div>
    )

}