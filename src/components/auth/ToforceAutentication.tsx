import useAuth from "@/src/data/hook/useAuth"
import Image from "next/image"
import router, { Router } from "next/router"
import { ReactNode, useState } from "react"
import loadiing from '../../../public/images/loading.gif'
import Head from "next/head"

interface ToForceAutenticationProps {
    children: ReactNode
    
}
export default function ToForceAutentication(props: ToForceAutenticationProps) {
    
   const {user,loading} = useAuth()
   function redefineContent() {
    return (
            <>
            <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                if(!document.cookie?.includes('admin-template-auth')) {
                                    window.location.href = "/autentication"
                                }
                            `
                        }}
                    />
                </Head>
                {props.children}
            </>
        )
    }
   
    function redefineLoading() {
        return (
            <div className='
            flex justify-center items-center h-screen
            '>  
           <Image src={loadiing} alt={""}/>

            </div>
        )
    }
    if(!loading && user?.email) {
      return redefineContent()
    } else if(loading) {
        return redefineLoading()
    } 
        router.push('/autentication')
        return null
    
}