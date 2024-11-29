'use client';

import { useState, useEffect } from 'react';
import Header from './header/header';
import styles from './page.module.css';

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      return newTheme;
    });
  };

  return (
    <>
      <header className={styles.header}>
        <Header toggleTheme={toggleTheme} theme={theme} />
      </header>
      {children}
    </>
  );
}
