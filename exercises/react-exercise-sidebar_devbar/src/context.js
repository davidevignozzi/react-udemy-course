import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Open Sidebar
   */
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  /**
   * Close Sidebar
   */
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  /**
   * Open Modal
   */
  const openModal = () => {
    setIsModalOpen(true);
  };

  /**
   * Close Modal
   */
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
