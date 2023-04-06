import { useReducer, createContext } from "react";

export const GlobalContext = createContext();

const initialState = {
  users: [],
  isDark: false,
  favs: [],
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      let exist = state.users.some((element) => element.id === action.payload.id)
      if(exist){
        let arr = state.users.map((element)=>{
          if(element.id === action.payload.id){
            return {...element, quanty:element.quanty + action.payload.quanty}
          }else{
            return element;
          }
        })
        return {...state,users:arr}

      }else{
        return { ...state, users: [...state.users, action.payload] };
      }
      
    case "GET_DENTIST":
      return { ...state, users: action.payload };
 
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
