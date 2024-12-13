'use client';

import React from 'react';
import Autton from '@/app/components/autton';

export interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <div>
      <p>{`Something went wrong. ${error.message}`}</p>
      <Autton onClick={() => reset()}>Try again</Autton>
    </div>
  );
}
