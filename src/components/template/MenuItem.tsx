import Link from "next/link"
interface MenuItemProps {
    url?: string
    text: string
    icon: any
}
export default function MenuItem(props: MenuItemProps) {

    function renderLink() {
        return (
            <>
            <a className={"flex flex-col justify-center  h-10  w-20 items-center"}>
                {props.icon}
            </a><span className={'text-xs font-light text-gray-100 text-center'}>

                {props.text}
                </span>
            </>
        )
    }
    return (
        
            <li className={" hover:bg-gray-100"}>
                {props.url ? (
                    <Link href={props.url}>
                        {renderLink()}
                     </Link> 
                ) : (
                    renderLink()
                )}
                
                 
            </li>
        
    )
}