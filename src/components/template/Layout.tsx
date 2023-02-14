import Content from "./Content"
import Header from "./Header"
import Menuside from "./Menuside"

interface LayoutProps {
   title: string
   caption: string
   children: any
}
//teste
export default function layout(props: LayoutProps) 
{ 
    return (
        <div className={"flex  h-screen w-screen bg-gray-50"}>
            <Menuside/>
            <div className={
             "flex-col w-full p-7 bg-gray-300 dark:bg-gray-800" }>
                 <Header title={props.title} caption={props.caption} />
                 <Content>
                 {props.children}
            </Content>
            </div>
            
        </div>
    )

}