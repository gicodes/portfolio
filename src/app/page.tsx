"use client"
import styles from "./page.module.css";
import { Overview } from './home/overview';
import ActionButton from './home/action-btn';
import { TechStack } from './home/tech-stack';

export default function Home() { 
  return (
    <main>
      <Overview />
      <TechStack />
      <ActionButton />
    </main>
  )
};