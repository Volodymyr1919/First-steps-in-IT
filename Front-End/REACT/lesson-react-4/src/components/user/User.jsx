import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function User() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div 
        style={{
            background: theme === "light" ? "white" : "#212529",
            color: theme === "light" ? "black" : "white"
    }}>
      <div>
            
      </div>
    </div>
  );
}
