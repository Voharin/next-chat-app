import { createContext, useContext } from "react";

const globalState = {
  channel: "",
};

const GlobalContext = createContext(globalState);

const StoreProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={globalState}>
      {children}
    </GlobalContext.Provider>
  );
};

const useStore = () => useContext(GlobalContext);

export { StoreProvider, useStore };
