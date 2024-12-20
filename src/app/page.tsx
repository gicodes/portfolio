"use client"

import { TechStack } from './home/tech-stack';
import ActionButton from './home/action-btn';
import { Overview } from './home/overview';
import styles from "./page.module.css";

export default function Home() { 
  return (
    <main className={styles.main}>
      <Overview />
      <TechStack />
      <ActionButton />
    </main>
  )
};
