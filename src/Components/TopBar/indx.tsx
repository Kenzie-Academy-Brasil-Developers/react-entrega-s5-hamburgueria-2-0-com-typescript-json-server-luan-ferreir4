import { UseSignIn } from "../../Providers/SignIn";
import { TitleContainer } from "../../Styles/ComponentsStyles/TopContentStyle";

import { BiSearchAlt } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { MdExitToApp } from "react-icons/md";

import {
  IconBox,
  SearchInputBox,
  SearchInputContainer,
} from "../../Styles/ComponentsStyles/InputStyle";

import {
  NavButtons,
  TopBarContainer,
} from "../../Styles/ComponentsStyles/TopBarStyle";

interface ITopBarProp {
  setShowCart: (value: boolean) => void;
}

export const TopBar = ({ setShowCart }: ITopBarProp) => {
  const { signOut } = UseSignIn();

  return (
    <TopBarContainer>
      <div className="title">
        <TitleContainer>
          <h1>Burguer</h1>
          <h2>Kenzie</h2>
        </TitleContainer>
      </div>

      <SearchInputBox>
        <SearchInputContainer placeholder="buscar por categoria" />
        <IconBox>
          <BiSearchAlt />
        </IconBox>
      </SearchInputBox>

      <NavButtons>
        <button onClick={()=> setShowCart(true)}>
          <BsCart4 />
        </button>
        <button onClick={signOut}>
          <MdExitToApp />
        </button>
      </NavButtons>
    </TopBarContainer>
  );
};
