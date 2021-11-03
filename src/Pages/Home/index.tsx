import { useState } from "react";
import { Cart } from "../../Components/Cart";
import { ProductsList } from "../../Components/ProductsList";
import { TopBar } from "../../Components/TopBar/indx";
import { Home } from "../../Styles/PageStyles/HomeStyle";

export const HomePage = () => {
  const [showCart, setShowCart] = useState(false);
  return (<>
      <TopBar setShowCart={setShowCart}/>
    <Home>
      <h2>Produtos:</h2>
      <ProductsList />
      {showCart &&
        <Cart setShowCart={setShowCart}/>
      }
    </Home>
    </>
  );
};
