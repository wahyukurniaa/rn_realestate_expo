import {createContext, ReactNode, useContext} from "react";
import {useAppwrite} from "@/lib/useAppwrite";
import {getCurrentUser} from "@/lib/appwrite";

interface GlobalContextTypes {
    isLogged: boolean;
    user: User;
    loading: boolean;
    refetch: () => void;
}

interface User{
    id: string;
    email: string;
    avatar: string;
}

const GlobalContext = createContext<GlobalContextTypes | undefined>(undefined)

interface GlobalProviderProps {
    children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const {data: user,loading,refetch} = useAppwrite({fn: getCurrentUser});
    const isLogged = !!user

    return (
        <GlobalContext.Provider
            value={{
                isLogged,
                user,
                loading,
                refetch,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () : GlobalContextTypes =>{
    const context = useContext(GlobalContext);
    if(!context){
        throw new Error(
            "useGlobalContext must be used within a GlobalProvider"
        )
    }
    return context;
}
export default GlobalProvider
