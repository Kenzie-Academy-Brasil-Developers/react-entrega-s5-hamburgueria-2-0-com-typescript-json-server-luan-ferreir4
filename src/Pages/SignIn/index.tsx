import { LoginForm } from "../../Components/LoginForm"
import { Link } from "react-router-dom"
export const SignInPage = () => {
    return(
        <div>
            <div>
            <h1>Burguer</h1>
            <h3>Kenzie</h3>
            </div>
            <div>
                <div>icon</div>
                <p>A vida é como um sanduíche, é preciso recheá-la com os melhores ingredientes.</p>
            </div>
            <LoginForm/>
            <div>
                <small>Não possui uma conta?</small>
                <Link to="/register">registre-se!</Link>
            </div>
        </div>
    )
}