import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [subLinksArr, setSubLinksArr] = useState([]);

  return (
    <AppContext.Provider
      value={{
        subLinksArr,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppContext, AppProvider}