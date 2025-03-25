import React, { FC, useState } from "react";
import { FloatingLabel, InputContainer, StyledInput } from "./styles";

interface InputProps {
   placeholder: string;
   value: string;
   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
   type?: string;
}

export function InputText({ placeholder, value, onChange, type = "text" }: InputProps) {
   return (
      <InputContainer>
         <StyledInput
            type={type}
            value={value}
            onChange={onChange}
            placeholder=" "
         />
         <FloatingLabel>{placeholder}</FloatingLabel>
      </InputContainer>
   );
};