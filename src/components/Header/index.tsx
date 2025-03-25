
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { StyleHeader } from '../../styles/layout';

export function Header() {
   return (
      <>
         <StyleHeader>
            <h2 className='texto'>Projeto Base 5</h2>
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
         />
      </>

   )
}