import { createContext, useState } from "react";

const ThemeContext = createContext('');

const initialTheme = "Light";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = () => {
    setTheme((curr) => (curr === "Light" ? "Dark" : "Light"));
  };

  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export {ThemeProvider};
export default ThemeContext;
