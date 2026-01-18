import { useState, useEffect } from 'react';

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1025,
} as const;

interface UseMediaQueryReturn {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export function useMediaQuery(): UseMediaQueryReturn {
  const [breakpoints, setBreakpoints] = useState<UseMediaQueryReturn>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const updateMatches = () => {
      const width = window.innerWidth;
      setBreakpoints({
        isMobile: width <= BREAKPOINTS.mobile,
        isTablet: width > BREAKPOINTS.mobile && width <= BREAKPOINTS.tablet,
        isDesktop: width >= BREAKPOINTS.desktop,
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
