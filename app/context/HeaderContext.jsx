'use client';
import { useState } from "react";
import { createContext } from "react"
export const HeaderContext = createContext(null);
const HeaderProvider = ({ children }) =>{ 
    const [isUserOpen,setisUserOpen] = useState(false);
    return(
    <HeaderContext.Provider value={{isUserOpen,setisUserOpen}}>{children}</HeaderContext.Provider>
    )
}
export default HeaderProvider