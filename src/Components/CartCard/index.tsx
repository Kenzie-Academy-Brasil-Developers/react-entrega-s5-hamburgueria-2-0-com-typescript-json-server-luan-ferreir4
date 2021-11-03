import { useState } from "react";
import { IBurger } from "../../Interfaces/Burger";
import { UseUser } from "../../Providers/User";
import { CartCardContainer } from "../../Styles/ComponentsStyles/CartCardStyle";

export const CartCard = ({ name, price, category, id }: IBurger) => {
  const [token] = useState(() => {
    const current = localStorage.getItem("token") || "";
    return JSON.parse(current);
  });

  const { deleteFromUserCart } = UseUser();

  const handleDel = () => {
    deleteFromUserCart(id, token);
  };

  return (
    <CartCardContainer>
      <div className="info">
        <h5 className="title">{name}</h5>
        <p className="price">{price}</p>
      <button onClick={handleDel}>Remover</button>
      </div>
    </CartCardContainer>
  );
};
