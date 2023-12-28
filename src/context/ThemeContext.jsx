import { createContext, useState } from "react";

const ThemeContext = createContext('');

const getInitialTheme = () => {
  const localStorageTheme = localStorage.getItem("theme");
  const defaultTheme = "Light";

  if(localStorageTheme === "Dark") {
    return "Light";
  } else if (localStorageTheme === "Light") {
    return "Dark";
  } else {
    return defaultTheme
  }
}

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const handleTheme = () => {
    setTheme((curr) => (curr === "Light" ? "Dark" : "Light"));
    localStorage.setItem("theme", theme);
  };

  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export {ThemeProvider};
export default ThemeContext;
