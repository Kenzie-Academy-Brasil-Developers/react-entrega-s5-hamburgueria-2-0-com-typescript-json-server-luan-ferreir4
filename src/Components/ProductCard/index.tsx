import { useState } from "react";
import { IBurger } from "../../Interfaces/Burger";
import { UseProducts } from "../../Providers/Products";
import { UseUser } from "../../Providers/User";
import { PdtCard } from "../../Styles/ComponentsStyles/ProductCardStyle";

export const ProductsCard = ({ name, price, category, id }: IBurger) => {
  const [userId] = useState(() => {
    const current = localStorage.getItem("userId") || "";
    return current;
  });
  const [token] = useState(() => {
    const current = localStorage.getItem("token") || "";
    return JSON.parse(current);
  });

  const { findProduct } = UseProducts();
  const { addToUserCart } = UseUser();

  const handleAdd = () => {
    const newPdt = { ...findProduct(id), userId: parseInt(userId) };
    addToUserCart(newPdt, token);
  };

  return (
    <PdtCard>
      <div className="imgContainer"></div>

      <div className="info">
        <h5 className="title">{name}</h5>
        <p className="category">Categoria: {category}</p>
        <p className="price">R$ {price}</p>
      </div>
      <button onClick={handleAdd}>Adicionar</button>
    </PdtCard>
  );
};
