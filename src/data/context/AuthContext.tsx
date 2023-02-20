import route from 'next/router' 
import firebase from '../../firebase/config'
import { createContext, use, useEffect, useState } from "react"
import User from "@/src/model/User"
import Cookies from 'js-cookie'
import { redirect } from 'next/dist/server/api-utils'
interface AuthContextProps {
    user: User
    loading?: boolean
    loginGoogle: () => void
    children?: any
    logout?: () => Promise<void>
    login?:(email: string, password: string) => Promise<void>
    register?:(email: string, password: string) => Promise<void>

}
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps) 

async function usernormalized(usuarioFaribase:firebase.User): Promise<User> {
    const token = await usuarioFaribase.getIdToken()
    return {
        uid: usuarioFaribase.uid,
        name: usuarioFaribase.displayName,
        email: usuarioFaribase.email,
        token,
        provider:usuarioFaribase.providerData[0]?.providerId || "",
        imageUrl: usuarioFaribase.photoURL
    }
}

  function managementCookie(logged:boolean) {
     if(logged){
         Cookies.set('admin-template-auth',logged,{
         expires: 7
         })
     }
      else{
         Cookies.remove('admin-template-auth')
     }
}

export function AuthProvider(props) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User>(null)
   
       async function setsUpSession (usuarioFaribase: firebase.User | null) {
         if(usuarioFaribase?.email){
             const user = await usernormalized(usuarioFaribase)
             setUser(user)
             managementCookie(true)
             setLoading(false)
             return user.email
         } else{
             setUser(null)
             managementCookie(false)
             setLoading(false)
             return false
         }
     }

    async function LoginGoogle () {
        try {
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            await setsUpSession(resp.user)
            route.push('/')
    
            } finally {
            setLoading(false)
        }
        
    }

    async function login(email: string,password: string) {
        try {
            const resp = await firebase.auth()
            .signInWithEmailAndPassword(email, password)
            
             await setsUpSession(resp.user)
            route.push('/')
    
            } finally {
            setLoading(false)
        }
        
    }

    async function register(email: string,password: string) {
        try {
            const resp = await firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            
            await setsUpSession(resp.user)
            route.push('/')
    
            } finally {
            setLoading(false)
        }
        
    }
     async function logout() {
        try {
            setLoading(true)
            await firebase.auth().signOut()
            await setsUpSession(null)
        

        } finally {
            setLoading(false)

        }
        
    }

        useEffect( ()=> {
            if(Cookies.get('admin-template-auth')){
                const cancel = firebase.auth().onIdTokenChanged(setsUpSession)
                return () => cancel()
            } else {
                setLoading(false)
            }
             
        }, [])
    
   return (
       <AuthContext.Provider value={{
        user,
        loginGoogle:LoginGoogle,
        logout,
        loading,
        login,
        register
      }}>
        {props.children}
       </AuthContext.Provider>
         
    )

    }
export  default AuthContext