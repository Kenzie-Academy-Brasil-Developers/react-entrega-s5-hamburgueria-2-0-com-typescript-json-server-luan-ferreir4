import { InputHTMLAttributes, ReactNode } from "react";
import { InputBox, InputContainer, IconBox } from "../../Styles/ComponentsStyles/InputStyle";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  register?: any;
  text?: string;
  icon?: ReactNode;
}

export const Input = ({
  error,
  register,
  text,
  icon,
  ...rest
}: InputProps) => {
  return (
    <InputBox>
      {icon && <IconBox>{icon}</IconBox>}
      <InputContainer {...register(text)} {...rest} />
      {error && <small>{error}</small>}
    </InputBox>
  );
};
