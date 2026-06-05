"use client";

import { Overview } from './_home/overview';
import ActionButtons from './_home/action-btn';
import { TechStack } from './_home/tech-stack';
import AppBuilderAd from './_home/app-builder-ad';
import { FeaturedShowcase } from './_home/featured-show';

export default function Home() {
  return (
    <main>
      <Overview />
      <FeaturedShowcase />
      <AppBuilderAd />
      <ActionButtons />
      <TechStack />
    </main>
  );
};