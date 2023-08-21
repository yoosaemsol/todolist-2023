import { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkModeContext);

// hook으로 내보내지 않는다면, 사용부에서
// const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
// 를 해주어야 한다.

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
