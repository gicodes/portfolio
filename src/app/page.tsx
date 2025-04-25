"use client";

import { useEffect, useState } from 'react';
import { Overview } from './_home/overview';
import ActionButton from './_home/action-btn';
import { TechStack } from './_home/tech-stack';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main>
      <Overview />
      <TechStack />
      <ActionButton />
    </main>
  );
};
