import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import VideoGallery from "../../components/VideoGaleria";
import { CategoriesSection, CategoriesTitle, CategoryTab, CategoryTabs, HeroButton, HeroContent, HeroSection, HeroSubtitle, HeroTitle, MainContent } from "./styles";

export function VideoBrasil() {
   return (
      <>
         <MainContent>
            <HeroSection>
               <HeroContent>
                  <HeroTitle>Os Melhores Vídeos do Brasil</HeroTitle>
                  <HeroSubtitle>
                     Descubra as maravilhas do Brasil através de nossa coleção exclusiva de vídeos.
                     De praias paradisíacas a receitas tradicionais, temos conteúdo para todos os gostos.
                  </HeroSubtitle>
                  <HeroButton>Explorar Agora</HeroButton>
               </HeroContent>
            </HeroSection>

            <CategoriesSection>
               <CategoriesTitle>Categorias</CategoriesTitle>
               <CategoryTabs>
                  <CategoryTab active>Todos</CategoryTab>
                  <CategoryTab>Viagens</CategoryTab>
                  <CategoryTab>Culinária</CategoryTab>
                  <CategoryTab>Cultura</CategoryTab>
                  <CategoryTab>Natureza</CategoryTab>
                  <CategoryTab>Esportes</CategoryTab>
                  <CategoryTab>Música</CategoryTab>
               </CategoryTabs>
            </CategoriesSection>

            <VideoGallery />
         </MainContent>
      </>
   );
};
