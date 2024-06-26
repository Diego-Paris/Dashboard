'use client';

import type { ReactElement } from 'react';
import { PageContainer } from '@/components/global/PageContainer/PageContainer';
import HeroText from '@/components/examples/HeroText/HeroText';
import { FeaturesCards } from '@/components/examples/FeaturesCards/FeaturesCards';
import { HomeFooter } from '@/components/global/HomeFooter/HomeFooter';

export function MainPage(): ReactElement {
  return (
    <>
      <PageContainer>
        <HeroText />

        <FeaturesCards />
      </PageContainer>
      <HomeFooter />
    </>
  );
}
