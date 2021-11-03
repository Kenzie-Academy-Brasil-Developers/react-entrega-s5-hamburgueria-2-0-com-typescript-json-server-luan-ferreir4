import { useState } from "react";
import { Cart } from "../../Components/Cart";
import { ProductsList } from "../../Components/ProductsList";
import { TopBar } from "../../Components/TopBar/indx";

export const HomePage = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div>
      <TopBar setShowCart={setShowCart}/>
      <h2>Produtos</h2>
      <ProductsList />
      {showCart &&
        <Cart />
      }
    </div>
  );
};
