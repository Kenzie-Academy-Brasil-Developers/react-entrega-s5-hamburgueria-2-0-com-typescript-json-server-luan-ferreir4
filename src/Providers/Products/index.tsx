import axios from "axios";
import { createContext, useContext, useState } from "react";
import { IBurger } from "../../Interfaces/Burger";
import { IProvidersProps } from "../../Interfaces/ProvidersProps";

interface IProductsProviderData {
  productsList: IBurger[];
  filteredList: IBurger[];
  isFiltered: boolean;
  getProducts: (userToken: object) => void;
  findProduct: (itemID: number) => IBurger;
  getFilteredlist: (userToken: object, category: string) => void;
}

const ProductsContext = createContext<IProductsProviderData>(
  {} as IProductsProviderData
);

export const ProductsProviders = ({ children }: IProvidersProps) => {
  const [productsList, setProductsList] = useState<IBurger[]>([]);
  const [filteredList, setFilteredList] = useState<IBurger[]>([]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  const getProducts = (userToken: object) => {
    axios
      .get<IBurger[]>("https://hamburg-burguer-api.herokuapp.com/products", {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => {
        setProductsList(res.data);
      })
      .catch((err) => console.log(err));
  };

  const findProduct = (itemID: number) => {
    const pdt = productsList.find((item) => item.id === itemID) as IBurger;
    return pdt;
  };
  const getFilteredlist = (userToken: object, category: string) => {
    axios
      .get<IBurger[]>(
        `https://hamburg-burguer-api.herokuapp.com/products?category=${category}`,
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      )
      .then((res) => {
        setFilteredList(res.data);
      })
      .then(() => {
        setIsFiltered(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <ProductsContext.Provider
      value={{
        getProducts,
        findProduct,
        productsList,
        filteredList,
        getFilteredlist,
        isFiltered
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const UseProducts = () => useContext(ProductsContext);
