import { createContext, useState } from "react";

export const CryptoContext = createContext({});

export const CryptoProvider = ({ children }) => {
  const [test, setTest] = useState("this is a test");

  return (
    <CryptoContext.Provider value={{ test, setTest }}>
      {children}
    </CryptoContext.Provider>
  );
};
