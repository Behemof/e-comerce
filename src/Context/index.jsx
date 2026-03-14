import { createContext, useState } from "react";

export const ContextoGlobal = createContext();

export function ContextoGlobalProveedor ({children}){
    const [count, setCount] = useState(0)

    return (
        <ContextoGlobal.Provider value={{ count, setCount}}> 
            {children}
        </ContextoGlobal.Provider>
    )
}

/* export const ContextoGlobalProveedor1 =({children})=> {
    return(
        
     <ContextoGlobal.Provider> 
        {children}
     </ContextoGlobal.Provider> 
    )

} */