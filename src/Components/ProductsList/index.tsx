import { useEffect, useState } from "react";

import { UseProducts } from "../../Providers/Products";
import { PdtListContainer } from "../../Styles/ComponentsStyles/ListContainer";
import { ProductsCard } from "../ProductCard";

export const ProductsList = () => {
  const [token] = useState(() => {
    const current = localStorage.getItem("token") || "";
    return JSON.parse(current);
  });

  const { getProducts, productsList, isFiltered, filteredList } = UseProducts();

  useEffect(() => {
    getProducts(token);
  });

  return (
    <>
      {!isFiltered ? (
        <PdtListContainer>
          {productsList.map((item) => (
            <ProductsCard
              key={item.id}
              name={item.name}
              price={item.price}
              id={item.id}
              category={item.category}
            />
          ))}
        </PdtListContainer>
      ) : (
        <PdtListContainer>
          {filteredList.map((item) => (
            <ProductsCard
              key={item.id}
              name={item.name}
              price={item.price}
              id={item.id}
              category={item.category}
            />
          ))}
        </PdtListContainer>
      )}
    </>
  );
};
