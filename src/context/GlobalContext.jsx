import { useReducer, createContext } from "react";

export const GlobalContext = createContext();

const initialState = {
  users: [],
  user: {},
  isDark: false,
  favs: [],
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      let exist = state.users.some(
        (element) => element.id === action.payload.id
      );
      if (exist) {
        return { ...state, favs: [...state.favs, action.payload] };
      }
    case "GET_DENTIST":
      return { ...state, users: action.payload };

    case "GET_DENTIST_ID":
      return { ...state, user: action.payload };

    case "SWITCH_MODE":
      return { ...state, isDark: !state.isDark };

    default:
      state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
