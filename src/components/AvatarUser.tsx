import Link from 'next/link'
import useAuth from '../data/hook/useAuth'

interface AvatarUserProps {
    classname?: string
}
export default function AvatarUser(props :AvatarUserProps) {
    const {user} = useAuth()
    return (
        <Link href="/profile">
            <img src={user?.imageUrl ?? '/images/1633249.svg'} alt="Avatar do usuário"
            className={`h-10  w-10 items-center 
            rounded-full cursor-pointer ${props.className}`}
            />
        </Link>
    )
    }