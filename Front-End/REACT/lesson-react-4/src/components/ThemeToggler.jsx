import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import Header from './headers/Header';
import Content from './content/Content';

export default function ThemeToggler() {
  const [theme, setTheme] = useState('light');
  
  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header />
        <Content />
    </ThemeContext.Provider>
  );
}
