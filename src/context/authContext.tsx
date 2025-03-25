import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextData {
   isLoggedIn: boolean;
   cadastro: (username: string, senha: string) => boolean;
   login: (username: string, senha: string) => boolean;
   logout: () => void;
   verificarAcesso: () => void
}

interface AuthProps {
   children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProps) {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const cadastro = (inputUsuario: string, inputSenha: string): boolean => {
      localStorage.setItem("@auth", JSON.stringify({
         usuario: inputUsuario,
         senha: inputSenha
      }));
      setIsLoggedIn(true);
      return true;
   };

   const login = (inputUsuario: string, inputSenha: string): boolean => {
      const acesso = localStorage.getItem("@auth");
      const cadastro = acesso !== null ? JSON.parse(acesso ?? '') : null
      if (cadastro !== null && inputUsuario === cadastro.usuario && inputSenha === cadastro.senha) {
         setIsLoggedIn(true);
         return true;
      }
      setIsLoggedIn(false);
      return false;
   };

   const logout = () => {
      localStorage.removeItem("@auth");
      setIsLoggedIn(false);
   };

   const verificarAcesso = () => {
      const acesso = !!localStorage.getItem("@auth");
      setIsLoggedIn(acesso)
   }

   return (
      <AuthContext.Provider value={{ isLoggedIn, cadastro, login, logout, verificarAcesso }}>
         {children}
      </AuthContext.Provider>
   );
};

