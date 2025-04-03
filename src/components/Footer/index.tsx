import React from 'react';
import { Copyright, FooterColumn, FooterContainer, FooterContent, FooterLinks, FooterTitle } from './styles';

export const Footer: React.FC = () => {
   return (
      <FooterContainer>
         <FooterContent>
            <FooterColumn>
               <FooterTitle>Sobre Nós</FooterTitle>
               <FooterLinks>
                  <li><a href="#">Quem Somos</a></li>
                  <li><a href="#">Nossa Missão</a></li>
                  <li><a href="#">Carreiras</a></li>
                  <li><a href="#">Contato</a></li>
               </FooterLinks>
            </FooterColumn>

            <FooterColumn>
               <FooterTitle>Categorias</FooterTitle>
               <FooterLinks>
                  <li><a href="#">Documentários</a></li>
                  <li><a href="#">Viagens</a></li>
                  <li><a href="#">Culinária</a></li>
                  <li><a href="#">Cultura</a></li>
               </FooterLinks>
            </FooterColumn>

            <FooterColumn>
               <FooterTitle>Suporte</FooterTitle>
               <FooterLinks>
                  <li><a href="#">Ajuda</a></li>
                  <li><a href="#">Termos de Uso</a></li>
                  <li><a href="#">Política de Privacidade</a></li>
                  <li><a href="#">FAQ</a></li>
               </FooterLinks>
            </FooterColumn>
         </FooterContent>

         <Copyright>
            &copy; {new Date().getFullYear()} VideoBrasil. Todos os direitos reservados.
         </Copyright>
      </FooterContainer>
   );
};