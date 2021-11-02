import axios from "axios";
import { createContext, useContext } from "react";
import { useHistory } from "react-router";

import { IProvidersProps } from "../../Interfaces/ProvidersProps";
import { IUserDataRegister } from "../../Interfaces/UserData";

interface IRegisterProviderData {
    registerUser: (data: IUserDataRegister) => void;
}

const RegisterContext = createContext<IRegisterProviderData>({} as IRegisterProviderData);

export const RegisterProvider = ({children}: IProvidersProps) => {
  const history = useHistory()
  const registerUser = (data: IUserDataRegister) => {
    axios
      .post("https://hamburg-burguer-api.herokuapp.com/register", data)
      .then(
          res => {
            history.push("/")
          }
      )
      .catch(err => console.log(err));
  };

  return <RegisterContext.Provider value={{registerUser}}>
      {children}
  </RegisterContext.Provider>;
};

export const UseRegister = () => useContext(RegisterContext); 