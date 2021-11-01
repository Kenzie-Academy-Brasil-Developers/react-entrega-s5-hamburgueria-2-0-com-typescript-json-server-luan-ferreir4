import { Cart } from "../../Components/Cart";
import { ProductsList } from "../../Components/ProductsList";
import { UseSignIn } from "../../Providers/SignIn";

export const HomePage = () => {
 
  const { signOut } = UseSignIn();

  return (
    <div>
     <ProductsList/>
      <Cart/>
      <button onClick={signOut}>Sair</button>
    </div>
  );
};
