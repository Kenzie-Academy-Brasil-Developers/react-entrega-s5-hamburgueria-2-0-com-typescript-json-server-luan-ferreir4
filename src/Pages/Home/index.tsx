import { Cart } from "../../Components/Cart";
import { ProductsList } from "../../Components/ProductsList";
import { TopBar } from "../../Components/TopBar/indx";

export const HomePage = () => {
  return (
    <div>
      <TopBar />
      <ProductsList />
      <Cart />
    </div>
  );
};
