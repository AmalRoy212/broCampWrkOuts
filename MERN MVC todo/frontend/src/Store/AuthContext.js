import { createContext, useState } from "react";


export const AuthContext = createContext();

export default function Auth ({children}){
  const [isUser,setUser] = useState(false);
  <AuthContext.Provider value={{isUser,setUser}}>
    {children}
  </AuthContext.Provider>
}

