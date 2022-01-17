import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [subLinksArr, setSubLinksArr] = useState(sublinks);
  const [coordinatesValue, setCoordinatesValue] = useState({});
  const [btnValue, setBtnValue] = useState('');

  return (
    <AppContext.Provider
      value={{
        subLinksArr,
        coordinatesValue,
        btnValue,
        setCoordinatesValue,
        setBtnValue
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