import { Input } from "../Input";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserDataRegister } from "../../Interfaces/UserData";
import { UseRegister } from "../../Providers/Register";
import { useHistory } from "react-router-dom"

import { Container, Form, FooterForm } from "../../Styles/ComponentsStyles/FormStyles";

export const RegisterForm = () => {
  const { registerUser } = UseRegister();
  const history = useHistory()
  const registerSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório").min(4, "Mínimo de 4 caracteres").max(25, "Maximo de 25 caracteres"),
    email: yup.string().required("Campo obrigatório").email("Email invalido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const handleRegister = (data: IUserDataRegister) => {
    console.log(data);
    registerUser(data);
  };

  return (
    <Container>
      <h3>Cadastro:</h3>

      <Form onSubmit={handleSubmit(handleRegister)}>
      <Input
          placeholder="Nome de usuário"
          register={register}
          text={"name"}
          error={errors.name?.message}
        />
        <Input
          placeholder="Email"
          register={register}
          text={"email"}
          error={errors.email?.message}
        />
        <Input
          type="password"
          placeholder="Senha"
          register={register}
          text={"password"}
          error={errors.password?.message}
        />
        <button type="submit">Cadastrar</button>
      </Form>
      <FooterForm>
          <small>Já possui uma conta?</small>
          <button onClick={()=> history.push("/")}>Logar</button>
      </FooterForm>
    </Container>
  );
}