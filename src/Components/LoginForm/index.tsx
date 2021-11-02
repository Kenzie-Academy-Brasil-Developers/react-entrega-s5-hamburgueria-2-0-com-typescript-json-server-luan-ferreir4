import { Input } from "../Input";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserDataLogin } from "../../Interfaces/UserData";
import { UseSignIn } from "../../Providers/SignIn";
import { useHistory } from "react-router-dom"

import { Container, Form, FooterForm } from "../../Styles/ComponentsStyles/FormStyles";

export const LoginForm = () => {
  const { signIn } = UseSignIn();
  const history = useHistory();

  const loginSchema = yup.object().shape({
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
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = (data: IUserDataLogin) => {
    console.log(data);
    signIn(data);
  };

  return (
    <Container>
      <h3>Login:</h3>

      <Form onSubmit={handleSubmit(handleLogin)}>
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
        <button type="submit">Entrar</button>
      </Form>
      <FooterForm>
          <small>Crie sua conta para saborear muitas delícias e matar sua fome!</small>
          <button onClick={()=>history.push("/register")}>Cadastrar</button>
      </FooterForm>
    </Container>
  );
}