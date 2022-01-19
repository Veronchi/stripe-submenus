import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

function AppProvider({ children }) {

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState({ page: '', links: [] });
  const [coordinatesValue, setCoordinatesValue] = useState({});

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((item) => item.page === text);
    setCurrentPage(page);
    setIsSubmenuOpen(true);
    setCoordinatesValue(coordinates);
  }
  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  };

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        currentPage,
        coordinatesValue,
        openSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }