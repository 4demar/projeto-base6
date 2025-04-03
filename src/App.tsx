import { BrowserRouter } from 'react-router-dom';
import { RoutesApp } from './routes';
import { AuthProvider } from './context/authContext';
import { ThemeProviderCustom } from './context/themeContext';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './styles/stylesGlobal';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
   return (
      <AuthProvider>
         <ThemeProviderCustom>
            <BrowserRouter>
               <GlobalStyle />
               <ToastContainer />
               <RoutesApp />
            </BrowserRouter>
         </ThemeProviderCustom>
      </AuthProvider>
   );
}

export default App;
