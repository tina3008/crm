'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Autton from '@/app/components/autton';

export interface AddPromotionButtonProps {
  companyId: string;
}

export default function AddPromotionButton({
  companyId,
}: AddPromotionButtonProps) {
  const router = useRouter();
  return (
    <Autton
      onClick={() =>
        router.push(`/companies/${companyId}/new-promotion`, { scroll: false })
      }
    >
      Add promotions
    </Autton>
  );
}
