'use client';

import React, { useEffect, useState } from 'react';
import Autton, { ButtonProps } from '@/app/components/autton';

export default function MagicButton(props: ButtonProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 2) {
      throw new Error('Unexpected error');
    }
  }, [count]);

  return (
    <Autton {...props} onClick={() => setCount(count + 1)}>
      Magic button
    </Autton>
  );
}
