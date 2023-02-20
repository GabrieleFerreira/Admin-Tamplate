interface AuthinputProps {
    label: string
    value: any
    mandatory?: boolean
    type: 'text' | 'email' | 'password'
    valueChanged: (newValue: any) => void
}
export default function Authinput(props: AuthinputProps) {
    return (
       <div className='flex flex-col mt-4'>
            <label>{props.label}</label>
            <input  
                type={props.type?? 'text'}  
                value={props.value} 
                onChange={e => props.valueChanged?.(e.target.value)}
                required={props.mandatory}
                className='bg-blue-100 px-20 py-3 rounded-lg 
                border focus:border-blue-500 focus:bg-white
                focus:outline-none '
                />
                

                
       </div>
       
    )
}