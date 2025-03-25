
import { ButtonContainer } from "./styles";

type props = {
   titulo: string;
   outline?: boolean;
   onClick?: () => void;
}

export function Button({ titulo, outline = false, onClick }: props) {

   return (
      <ButtonContainer
         outline={outline}
         onClick={onClick}
      >
         {titulo}
      </ButtonContainer>
   )
}