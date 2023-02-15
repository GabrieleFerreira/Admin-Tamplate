import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";
export default function notifications() {
    const {toggleTheme} = useAppData()
    return (
        <Layout title ="Notificações"
        caption="Aqui você pode gerenciar sua notificações!!">
        
        <button onClick={toggleTheme} >Alternar Tema</button>
       
        </Layout>
    )
}