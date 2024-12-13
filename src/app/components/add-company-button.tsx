'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Autton from '@/app/components/autton';

export default function AddCompanyButton() {
  const router = useRouter();
  return (
    <Autton onClick={() => router.push('/companies/new', { scroll: false })}>
      Add company
    </Autton>
  );
}
