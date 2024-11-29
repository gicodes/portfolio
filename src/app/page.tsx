"use client";

import { useState, useEffect,  } from 'react';
import { TechStack } from './home/techstack';
import { Overview } from './home/overview';
import { Roboto } from 'next/font/google';
import styles from "./page.module.css";
import Header from "./header/header";
import Footer from "./footer/footer";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'], 
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {  
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      return newTheme;
    });
  };

  return (
    <div 
      data-theme={theme} 
      className={roboto.className}
      >
      <header className={styles.header}>
        <Header 
          toggleTheme={toggleTheme} 
          theme={theme}
        />
      </header>
      <main
        className={styles.main}
      >
        <Overview />
        <TechStack />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
