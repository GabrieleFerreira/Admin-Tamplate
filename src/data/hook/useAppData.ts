import { useContext } from "react";
import AppContext from "../context/hook/AppContext";

const useAppData = ()=>useContext(AppContext)
export default useAppData