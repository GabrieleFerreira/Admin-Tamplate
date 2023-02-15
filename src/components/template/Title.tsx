
interface TitleProps {
    title: string
    caption: string
}
export default function Title(props: TitleProps) {
    return (
        <div>
            <h1 className=" font-black text text-3xl text-gray-900
                dark:text-gray-100" 
             >
                {props.title}
            </h1>

            <h2 className="font font-light text-sm text-gray-600
                dark:text-gray-200">
                {props.caption}
            </h2>
        </div>

    )
}