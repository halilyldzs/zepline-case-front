import { useState, useEffect } from 'react';

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1025,
  desktopLg: 1280,
} as const;

interface UseMediaQueryReturn {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isDesktopLg: boolean;
}

export function useMediaQuery(): UseMediaQueryReturn {
  const [breakpoints, setBreakpoints] = useState<UseMediaQueryReturn>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isDesktopLg: false,
  });

  useEffect(() => {
    const updateMatches = () => {
      const width = window.innerWidth;
      setBreakpoints({
        isMobile: width <= BREAKPOINTS.mobile,
        isTablet: width > BREAKPOINTS.mobile && width <= BREAKPOINTS.tablet,
        isDesktop: width >= BREAKPOINTS.desktop,
        isDesktopLg: width >= BREAKPOINTS.desktopLg,
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
