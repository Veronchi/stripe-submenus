import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [subLinksArr, setSubLinksArr] = useState(sublinks);
  const [coordinatesValue, setCoordinatesValue] = useState({});
  const [btnValue, setBtnValue] = useState('');

  const addCoordinates = (e) => {
    const text = e.target.textContent
    const { left, top } = e.target.getBoundingClientRect();
    const fixedLeft = parseFloat(left.toFixed(3));

    setBtnValue(text);
    setCoordinatesValue({ left: fixedLeft, top: top });
  }

  const deleteBtnValue = (e) => {
    setBtnValue('')
  }

  return (
    <AppContext.Provider
      value={{
        subLinksArr,
        coordinatesValue,
        btnValue,
        setCoordinatesValue,
        setBtnValue,
        addCoordinates,
        deleteBtnValue
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