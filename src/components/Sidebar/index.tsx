import { useState } from "react";
import { IconType } from "react-icons";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import { Container } from "./styled";

export type SidebarType = {
   icone: IconType,
   texto: string;
   to: string;
};

type SidebarProps = {
   listSidebar: SidebarType[];
};

export function Sidebar({ listSidebar }: SidebarProps) {
   const [sidebar, setSidebar] = useState(false)
   const showSiderbar = () => setSidebar(!sidebar)
   const { isLoggedIn, logout } = useAuth();


   return (
      <>
         {isLoggedIn &&
            <Container sidebar={sidebar} >
               {sidebar
                  ?
                  <>
                     <nav className="menu-lateral">
                        <div className="btn-expandir">
                           <FaTimes onClick={showSiderbar} />
                        </div>
                        <ul>
                           {listSidebar.map((item, index) => (
                              <Link key={index} className="link" to={item.to} onClick={showSiderbar}>
                                 <li className="item-menu">
                                    <span className="icon"><item.icone /></span>
                                    <span className="texto">{item.texto}</span>
                                 </li>
                              </Link>
                           ))}

                           <div className="mt-5">
                              <Link className="link" onClick={() => logout()} to={"/login"}>
                                 <div className="item-menu">
                                    <span className="texto">Sair</span>
                                 </div>
                              </Link>
                           </div>
                        </ul>
                     </nav>
                     <div className="fechaMenu" onClick={showSiderbar}></div>
                  </>
                  :
                  <FaBars onClick={showSiderbar} />
               }
            </Container>
         }
      </>
   )
}