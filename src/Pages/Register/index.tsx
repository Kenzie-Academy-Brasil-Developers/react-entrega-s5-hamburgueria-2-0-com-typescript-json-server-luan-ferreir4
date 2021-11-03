import { RegisterForm } from "../../Components/RegisterForm"
import { TopContent } from "../../Components/TopContent"
import { Page } from "../../Styles/PageStyles/PageRegisterStyle"
export const RegisterPage = () => {
    return(
        <Page>
            <div className="top">
            <TopContent/>
            </div>
            <RegisterForm/>
        </Page>
    )
}