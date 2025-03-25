import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import PublicRoute from "./publicRoute";
import PrivateRoute from "./privateRoute";
import { FaAdjust, FaHome, FaUserPlus } from "react-icons/fa";
import { Sidebar } from "../components/Sidebar";
import { Container } from "../styles/layout";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import CustomizarWeb from "../pages/customizarWeb";
import Formulario from "../pages/formulario";

const listaSidebar = ([
   { icone: FaHome, texto: "Principal", to: '/' },
   { icone: FaUserPlus, texto: 'Formulario', to: '/Formulario' },
   { icone: FaAdjust, texto: 'Customizar Web', to: '/CustomizarWeb' }
]);

export function RoutesApp() {
   return (
      <>
         <Sidebar listSidebar={listaSidebar} />
         <Header />
         <Container>
            <Routes>
               {/* Rotas públicas */}
               <Route element={<PublicRoute />}>
                  <Route path="/login" element={<Login />} />
               </Route>

               {/* Rotas privadas */}
               <Route element={<PrivateRoute />}>
                  <Route path="/" element={<Login />} />
                  <Route path="/Formulario" element={<Formulario />} />
                  <Route path="/CustomizarWeb" element={<CustomizarWeb />} />
               </Route>

               {/* Rota padrão */}
               <Route path="*" element={<Login />} />

            </Routes>
         </Container>
         <Footer />
      </>
   )
}