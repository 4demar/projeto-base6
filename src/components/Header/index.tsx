import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { StyleHeader } from '../../styles/layout';
import { HeaderContainer, Logo, LogoIcon, Nav } from './styles';
import { FaPlay } from 'react-icons/fa';

export function Header() {
   return (
      <HeaderContainer>
         <Logo>
            <LogoIcon>
               <FaPlay size={20} />
            </LogoIcon>
            VideoBrasil
         </Logo>
         <Nav>
            <a href="#">Início</a>
            <a href="#">Categorias</a>
            <a href="#">Populares</a>
            <a href="#">Sobre</a>
         </Nav>
         <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
         />
      </HeaderContainer>
   )
}
{/* <StyleHeader>
   <h2 className='texto'>Projeto Base 6</h2>
</StyleHeader>
<ToastContainer
   position="top-right"
   autoClose={3000}
   hideProgressBar={false}
   newestOnTop={false}
   closeOnClick
   rtl={false}
   pauseOnFocusLoss
   draggable
   pauseOnHover
   theme="colored"
/> */}

