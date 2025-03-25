import { css, styled } from "styled-components";

type ButtonProps = {
   outline?: boolean
}

export const ButtonContainer = styled.button<ButtonProps>`
   flex:1;
   height: 36px;
   align-items: center; // Centraliza no vertical qdo display flex
   justify-content: center; //Centraliza na vertical qdo display flex
   cursor: pointer;
   font-size: 16;
   border-radius: 4px;

   ${({ theme, outline }) => css`
      border: 1px solid ${theme.COLORS.greenDark};
      background-color: ${outline ? 'transparent' : theme.COLORS.greenDark};

      color: ${outline ? theme.COLORS.greenDark : theme.COLORS.white};
      font-size: ${theme.FONT_SIZE.MD}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
   `}
`