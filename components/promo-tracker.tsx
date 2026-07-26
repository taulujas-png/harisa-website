'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export function PromoTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const promo = searchParams.get('promo');
    if (promo) {
      localStorage.setItem('harisa_promo', promo.toUpperCase());
    }
  }, [searchParams]);

  return null;
}
