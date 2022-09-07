import React, {createContext, ReactNode, useState} from 'react';

interface TMode {
  darkMode: boolean;
  ToggleDarkMode: () => {};
}
const DarkModeContext = createContext({
  darkMode: false,
  ToggleDarkMode: () => {},
});

const DarkModeProvider = (props: {children?: ReactNode}) => {
  const [darkMode, setDarkMode] = useState(false);
  const ToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <DarkModeContext.Provider value={{darkMode, ToggleDarkMode}}>
      {props.children}
    </DarkModeContext.Provider>
  );
};
export {DarkModeContext, DarkModeProvider};
