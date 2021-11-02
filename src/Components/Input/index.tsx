import { InputHTMLAttributes } from "react";
import { InputBox, InputContainer } from "../../Styles/ComponentsStyles/InputStyle";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  register: any;
  text: string;
}

export const Input = ({
  label,
  error,
  register,
  text,
  ...rest
}: InputProps) => {
  return (
    <InputBox>
      {label && <p>{label}</p>}
      <InputContainer {...register(text)} {...rest} />
      {error && <p>{error}</p>}
    </InputBox>
  );
};
