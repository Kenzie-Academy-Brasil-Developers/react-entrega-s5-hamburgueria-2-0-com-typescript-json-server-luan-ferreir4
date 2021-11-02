import { LoginForm } from "../../Components/LoginForm";
import { TopContent } from "../../Components/TopContent";
import { Page } from "../../Styles/PageStyles/PageSignInStyle";
export const SignInPage = () => {
  return (
    <Page>
      <TopContent />
      <LoginForm />
    </Page>
  );
};
