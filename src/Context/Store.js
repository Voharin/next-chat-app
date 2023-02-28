import { createContext, useContext, useReducer, useMemo } from "react";

const initialState = {
  channel: "",
  message: "",
  sender: "",
  receiver: "",
};

const GlobalContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CHANNEL":
      return {
        ...state,
        channel: action.payload,
      };
    case "SEND_MESSAGE":
        return {
            ...state,
            message: action.payload,
        }

    default:
      return state;
  }
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useStore = () => useContext(GlobalContext);

export { StoreProvider, useStore };
