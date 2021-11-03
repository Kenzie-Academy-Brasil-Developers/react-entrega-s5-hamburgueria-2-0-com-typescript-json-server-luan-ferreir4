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
import { useState } from "react";
import { UseProducts } from "../../Providers/Products";

interface ITopBarProp {
  setShowCart: (value: boolean) => void;
}

export const TopBar = ({ setShowCart }: ITopBarProp) => {
  const [token] = useState(() => {
    const current = localStorage.getItem("token") || "";
    return JSON.parse(current);
  });
  
  const { signOut } = UseSignIn();
  const {getFilteredlist} = UseProducts();
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch=()=>{
    getFilteredlist(token, searchText);
  }

  return (
    <TopBarContainer>
      <div className="title">
        <TitleContainer>
          <h1>Burguer</h1>
          <h2>Kenzie</h2>
        </TitleContainer>
      </div>

      <SearchInputBox>
        <SearchInputContainer
          placeholder="buscar por categoria"
          onChange={(evt) => setSearchText(evt.target.value)}
        />
        <IconBox onClick={handleSearch}>
          <BiSearchAlt />
        </IconBox>
      </SearchInputBox>

      <NavButtons>
        <button onClick={() => setShowCart(true)}>
          <BsCart4 />
        </button>
        <button onClick={signOut}>
          <MdExitToApp />
        </button>
      </NavButtons>
    </TopBarContainer>
  );
};
