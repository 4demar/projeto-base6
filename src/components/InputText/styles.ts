import { styled } from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 20px 0;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid gray;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: ${({ theme }) => theme.COLORS.blueDark};
  }
  
  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0;
    bottom: 12px;
    left: 0;
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.blueDark};
  }
`;

//   ${({ theme, outline }) => css`
//       border: 1px solid ${theme.COLORS.greenDark};
//       background-color: ${outline ? 'transparent' : theme.COLORS.greenDark};

//       color: ${outline ? theme.COLORS.greenDark : theme.COLORS.white};
//       font-size: ${theme.FONT_SIZE.SM}px;
//       font-family: ${theme.FONT_FAMILY.BOLD};
//    `}


export const FloatingLabel = styled.label`
   width: auto;
   position: absolute;
   left: 10px;
   top: 50%;
   transform: translateY(-50%);
   font-size: 16px;
   color: gray;
   background: transparent;
   padding: 0 4px;
   transition: all 0.3s;
   pointer-events: none;
`;