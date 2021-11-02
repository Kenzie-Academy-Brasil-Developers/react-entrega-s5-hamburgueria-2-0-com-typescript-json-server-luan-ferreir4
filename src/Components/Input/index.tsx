import { InputHTMLAttributes } from "react";
import { InputBox, InputContainer } from "../../Styles/ComponentsStyles/InputStyle";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  register: any;
  text: string;
}

export const Input = ({
  error,
  register,
  text,
  ...rest
}: InputProps) => {
  return (
    <InputBox>
      <InputContainer {...register(text)} {...rest} />
      {error && <small>{error}</small>}
    </InputBox>
  );
};
