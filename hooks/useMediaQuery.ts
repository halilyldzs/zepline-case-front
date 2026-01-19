'use client';

import { useEffect, useState } from 'react';

export const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
} as const;

interface UseMediaQueryReturn {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isDesktopLg: boolean;
}

export function useMediaQuery(): UseMediaQueryReturn {
  const [breakpoints, setBreakpoints] = useState<UseMediaQueryReturn>({
    isMobile: true,
    isTablet: false,
    isDesktop: false,
    isDesktopLg: false,
  });

  useEffect(() => {
    const updateMatches = () => {
      const width = window.innerWidth;
      setBreakpoints({
        isMobile: width < BREAKPOINTS.md,
        isTablet: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg,
        isDesktop: width >= BREAKPOINTS.xl,
        isDesktopLg: width >= BREAKPOINTS.xxl,
      });
    };

    updateMatches();

    window.addEventListener('resize', updateMatches);

    return () => {
      window.removeEventListener('resize', updateMatches);
    };
  }, []);

  return breakpoints;
}
