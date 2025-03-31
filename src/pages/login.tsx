import { useState } from 'react';
import { Container } from '../styles/layout';
import styled from 'styled-components';
import { useAuth } from '../hook/useAuth';
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '../components/services/firebase';

export default function Login() {
   const [user, setUser] = useState<User>({} as User);
   const { isLoggedIn, login, cadastro } = useAuth();
   const [username, setUsername] = useState('junior');
   const [password, setPassword] = useState('junior');
   const [mensagem, setMensagem] = useState('');

   const handleLogin = () => {
      const success = login(username, password);
      if (!success) {
         setMensagem('Autenticação invalida, tente novamente.');
      }
   };

   const handleCadastro = () => {
      const success = cadastro(username, password);
      if (!success)
         setMensagem('Falha ao efetuar cadastro, tente novamente.');
   };

   function AutenticacaoGoogle() {
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
         .then(async (result) => {
            console.log(result.user);
            cadastro(result.user.displayName ?? '', result.user.email ?? '')
            setUser(result.user);

         }).catch((error) => {
            console.log(error);
         });

   }

   return (
      <Container>

         {!isLoggedIn &&
            <>
               {/* <Container> */}
               <h1>Login</h1>
               <br />
               <div className="row mt-3 d-flex justify-content-center">
                  <div className="col-4">
                     <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={styles.input}
                        className='w-100'
                     />

                     <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                        className='w-100'
                     />

                  </div>
               </div>


               <div className="row mt-3 d-flex justify-content-center">
                  <div className="col-2">
                     <Button onClick={handleLogin}><div style={styles.textLabel}>Login</div></Button>
                  </div>
                  <div className="col-2">
                     <Button onClick={handleCadastro}>Cadastro</Button>
                  </div>
               </div>
               <div className="row mt-3 d-flex justify-content-center">
                  <h1>Acesse sua conta</h1>
                  <div className="col-2">
                     <Button onClick={AutenticacaoGoogle}>Autenticar conta google</Button>
                  </div>

               </div>
               {mensagem && <p style={styles.error}>{mensagem}</p>}
               {/* </Container> */}
            </>
         }
      </Container>
   );
};

const Button = styled.div`
   display: flex;
   height: 36px;
   padding: 16px;
   align-items: center; // Centraliza no vertical qdo display flex
   justify-content: center; //Centraliza na vertical qdo display flex

   border-radius: 4px;
   border: 1px solid #333;
   background-color: #007bff;
   color: '#fff';
   cursor: pointer;
   font-size: 16;
`

const styles = {
   container: { display: 'flex', alignItems: 'center', gap: '10px' },
   input: { padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '200px', fontSize: 16 },
   error: { color: 'red' },
   textLabel: { fontSize: 16 }
};

