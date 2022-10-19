import React, { useState, createContext, useContext } from "react";


type ContextType = {
    userSelectFoodNames: string[];
    setUserSelectFoodNames: React.Dispatch<React.SetStateAction<string[]>>;
}

export const UserSelectFoodNamesContext = createContext({} as ContextType)

export const UserSelectFoodNamesProvider = (props: any) => {
  const [userSelectFoodNames, setUserSelectFoodNames] = useState<string[]>([])

  return (
    <UserSelectFoodNamesContext.Provider value={{userSelectFoodNames, setUserSelectFoodNames}}>
      {props.children}
    </UserSelectFoodNamesContext.Provider>
  )
}