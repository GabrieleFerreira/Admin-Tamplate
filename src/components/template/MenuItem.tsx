import Link from "next/link"
interface MenuItemProps {
    url?: string
    text: string
    icon: any
    className?: string
    onClick?: (evento:any)=>void 
}
export default function MenuItem(props: MenuItemProps) {

    function renderLink() {
        return (
            <>
             <a className={`flex flex-col justify-center  h-10  w-20 items-center 
             dark: text-gray-600 ${props.className}`}>
                {props.icon} 
                <span className={'text-xs font-light text-gray-900 text-center'}>

                {props.text}
                </span>
            </a>

           
            </>
            
        )
    }
    return (
        
            <li onClick={props.onClick} className={" hover:bg-gray-400  cursor-pointer"}>
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