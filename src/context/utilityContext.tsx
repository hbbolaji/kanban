import React, { createContext, useState } from "react";

interface Props {
  dark: boolean;
  toggleTheme: () => void;
}

export const UtilityContext = createContext<Props>({
  dark: false,
  toggleTheme: () => {},
});

const UtilityProvider = ({ children }: { children: JSX.Element }) => {
  const [dark, setDark] = useState<boolean>(false);
  const toggleTheme = () => {
    setDark((props) => !props);
  };
  return (
    <UtilityContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </UtilityContext.Provider>
  );
};

export default UtilityProvider;
