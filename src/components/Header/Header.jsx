import React from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import styles from './Header.module.css';

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {filters?.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => toggleDarkMode()}>
        {!darkMode && '💡'}
        {darkMode && '💤'}
      </button>
    </header>
  );
}
