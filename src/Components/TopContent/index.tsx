import {
  TopContentContainer,
  TitleContainer,
  IconContainer,
} from "../../Styles/ComponentsStyles/TopContentStyle";

import { FiShoppingBag } from "react-icons/fi";

export const TopContent = () => {
  return (
    <TopContentContainer>
      <TitleContainer>
        <h1>Burguer</h1>
        <h2>Kenzie</h2>
      </TitleContainer>
      <IconContainer>
        <div>
          <FiShoppingBag />
        </div>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os <b>melhores</b>{" "}
          ingredientes.
        </p>
      </IconContainer>
    </TopContentContainer>
  );
};
