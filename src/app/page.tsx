"use client";

import { Overview } from './_home/overview';
import ActionButton from './_home/action-btn';
import { TechStack } from './_home/tech-stack';

export default function Home() {
  return (
    <main>
      <Overview />
      <TechStack />
      <ActionButton />
    </main>
  );
};