import { useEffect, useState } from "react";

import { UseUser } from "../../Providers/User";
import { CartBg, CartContainer, TotalPriceContainer } from "../../Styles/ComponentsStyles/CartStyle";
import { CartListContainer } from "../../Styles/ComponentsStyles/ListContainer";
import { CartCard } from "../CartCard";

interface ICartProp {
  setShowCart: (value: boolean) => void;
}

export const Cart = ({ setShowCart }: ICartProp) => {
  const [userId] = useState(() => {
    const current = localStorage.getItem("userId") || "";
    return current;
  });

  const { userCart, getUserCart } = UseUser();

  useEffect(() => {
    getUserCart(parseInt(userId));
  }, [getUserCart, userId]);

  return (
    <CartBg>
      <CartContainer>
        <div className="cartHeader">
          <h4>Carrinho:</h4>
          <button className="closeCart" onClick={() => setShowCart(false)}>
            X
          </button>
        </div>
        <CartListContainer>
          {userCart.map((item) => (
            <CartCard
              key={item.id}
              id={item.id}
              name={item.name}
              category={item.category}
              price={item.price}
            />
          ))}
        </CartListContainer>

        <TotalPriceContainer>
          total a pagar:
          <p>{userCart.reduce((acc, pdt)=> pdt.price + acc, 0).toFixed(2)}</p>
        </TotalPriceContainer>
      </CartContainer>
    </CartBg>
  );
};
