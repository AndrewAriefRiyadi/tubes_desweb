/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const browserLanguage = navigator.language.split("-")[0];
  const [language, setLanguage] = useState(browserLanguage || "en");

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };
  
  useEffect(() => {
    setLanguage(browserLanguage || "en");
  }, [browserLanguage]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
