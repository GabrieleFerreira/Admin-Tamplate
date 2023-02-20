import { useState } from "react";
import { IconWarn } from "../components/icons";
import Authinput from "../components/auth/Authinput";
import useAuth from "../data/hook/useAuth";

export default function Autentication() {
   
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const { register,login,loginGoogle} = useAuth()
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    const [password, setPassword] = useState('')
    const [mode, setMode] = useState<'login' | 'cadastro'>('login')
  
    function displayError(mgs, timeInSeconds = 5 ) {
        setError(mgs)
        setTimeout(() => setError(null), timeInSeconds * 1000)
    }

    async function toSubmit(){
        try {
            if(mode === 'login') {
                await  login(email, password) 
                
            } else {
               await register(email,password)
             
        }
        } catch(e) {
            console.log(e)
            Error(e?.message ?? "erro inesperado")
        }
        
    }
    return (
        <div className='flex h-screen items-center justify-center'>
            <div className=' hidden md:block w-1/2 lg:w-2/3 '>
               <img src="https://source.unsplash.com/random" alt="Imagem na tela de autenticação"
               className=' h-screen w-full object-cover'/>
            </div>

            <div className='  m-10  w-full md:w-1/2 lg:w-1/3'>
            <h1 className='
            text-3xl font-bold mb-5 
            '>
                {mode === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na plataforma!'}
                
            </h1>
            {error ? (
                <div className=' flex items-center bg-red-400 text-white py-3 px-5 my-2
                border border-red-700 rounded-lg'>
                    {IconWarn(6)}
                    <span className='ml-3'>{error}</span>
    
                </div>
            ) : false}
            
            <Authinput
                label="Email"
                type="email"
                value={email}
                valueChanged={setEmail}
                mandatory
            />
            <Authinput
                label="Senha"
                value={password}
                type="password"
                valueChanged={setPassword}
                mandatory
            />
            <button onClick={toSubmit} className=' 
                w-full bg-indigo-500 hover:bg-indigo-400
                text-white rounded-lg px-4 py-3 mt-6
            '>
                {mode === 'login'? 'Entrar' : 'Cadastrar'}
            </button>
           
            <hr className='my-6  border-gray-300 w-full'/>

            <button onClick={loginGoogle} className=' 
                w-full bg-red-500 hover:bg-red-400
                text-white rounded-lg px-4 py-3 
            '>
               Entrar com o Google
            </button>
            {mode === 'login'? (
                <p className='mt-8'>Novo por aqui?
                    <a onClick={()=> setMode('cadastro')}
                    className='text-blue-500 hover:text-blue-700 font-semibold
                    cursor-pointer'> Crie uma conta gratuitamente</a>
                </p>
            ) : (
                <p className='mt-8'> Já faz parte da nossa comunidade?
                    <a onClick={()=> setMode('login')}
                    className={'text-blue-500 hover:text-blue-700 font-semibold  cursor-pointer'} > Entre com as sua credenciais!
                    </a>
                </p>

            )}
        </div>
        </div>
        
        
    )
}