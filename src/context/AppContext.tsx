// src/context/state.js
import { NextPage } from 'next/types';
import { createContext, ReactElement, useContext } from 'react';

// this could be some sort of global state context
// currently set with optionals
type TGlobalContext = {
  connected?: boolean;
  address?: string;
  networkID?: number;
}
const GlobalContext = createContext<TGlobalContext | null >(null);

export const GlobalProvider: React.FC<{ children: ReactElement }> = ({ children }) => {
  let sharedState = {/* whatever you want */}

  return (
    <GlobalContext.Provider value={sharedState}>
      {children}
    </GlobalContext.Provider>
  )
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}