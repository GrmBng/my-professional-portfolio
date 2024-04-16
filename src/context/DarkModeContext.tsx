import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

interface DarkModeSetter {
  children: React.ReactNode;
}

export const DarkModeSetter: React.FC<DarkModeSetter> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const darkModeSetting = localStorage.getItem("darkMode") === "enabled";
    setIsDarkMode(darkModeSetting);
    document.documentElement.classList.toggle("dark", darkModeSetting);
  }, []);

  const toggleDarkMode = () => {
    const changeDarkModeSetting = !isDarkMode;
    setIsDarkMode(changeDarkModeSetting);
    localStorage.setItem(
      "darkMode",
      changeDarkModeSetting ? "enabled" : "disabled"
    );
    document.documentElement.classList.toggle("dark", changeDarkModeSetting);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const setDarkMode = () => useContext(DarkModeContext);
