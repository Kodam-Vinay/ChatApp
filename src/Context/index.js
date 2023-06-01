import { createContext, useState } from "react";
import ToasterContainer from "../components/Toast";

const MainContext = createContext("");

const MainContextProvider = ({ children }) => {
  const [loginToken, setLoginToken] = useState(null);
  return (
    <MainContext.Provider value={{ loginToken, setLoginToken }}>
      {children}
      <ToasterContainer />
    </MainContext.Provider>
  );
};

export { MainContext, MainContextProvider };
