"use client"

import { TechStack } from './home/techstack';
import { Overview } from './home/overview';
import styles from "./page.module.css";
import Footer from "./footer/footer";

export default function Home() { 

  return (
    <div>
      <main className={styles.main}>
        <Overview />
        <TechStack />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
