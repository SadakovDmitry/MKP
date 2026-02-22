import { useEffect, useState, type ReactNode } from 'react';
import DesktopPage from './DesktopPage';
import DesktopConstructionPage from './DesktopConstructionPage';
import AboutPage from './AboutPage';
import AboutPageAdaptive from './AboutPageAdaptive';
import AboutPageMobile, { ABOUT_MOBILE_FRAME_HEIGHT, ABOUT_MOBILE_FRAME_WIDTH } from './AboutPageMobile';
import MobilePage, { getMobileFrameHeight, MOBILE_FRAME_WIDTH } from './MobilePage';
import FloatingHeader from './FloatingHeader';
import type { SitePage } from './navigation';

const MOBILE_LAYOUT_BREAKPOINT = 1200;
const ABOUT_DESKTOP_BREAKPOINT = 1280;

export default function App() {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState<SitePage>('home');

  useEffect(() => {
    const updateViewport = () => setViewportWidth(window.innerWidth);
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const handleNavigate = (page: SitePage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const withHeader = (content: ReactNode) => (
    <>
      <FloatingHeader currentPage={currentPage} onNavigate={handleNavigate} />
      {content}
    </>
  );

  const isMobileLayout = viewportWidth > 0 && viewportWidth < MOBILE_LAYOUT_BREAKPOINT;

  if (currentPage === 'about') {
    if (isMobileLayout) {
      const scale = viewportWidth > 0 ? Math.min(1, viewportWidth / ABOUT_MOBILE_FRAME_WIDTH) : 1;

      return withHeader(
        <div className="w-full overflow-x-hidden bg-white">
          <div
            className="mx-auto relative"
            style={{ width: `${ABOUT_MOBILE_FRAME_WIDTH * scale}px`, height: `${ABOUT_MOBILE_FRAME_HEIGHT * scale}px` }}
          >
            <div
              className="absolute left-0 top-0"
              style={{ width: `${ABOUT_MOBILE_FRAME_WIDTH}px`, transform: `scale(${scale})`, transformOrigin: 'top left' }}
            >
              <AboutPageMobile />
            </div>
          </div>
        </div>,
      );
    }

    const isDesktopAbout = viewportWidth >= ABOUT_DESKTOP_BREAKPOINT;
    return withHeader(isDesktopAbout ? <AboutPage onNavigate={handleNavigate} /> : <AboutPageAdaptive onNavigate={handleNavigate} />);
  }

  if (!isMobileLayout) {
    if (currentPage === 'home') {
      return withHeader(<DesktopPage onNavigate={handleNavigate} />);
    }

    return withHeader(<DesktopConstructionPage currentPage={currentPage} onNavigate={handleNavigate} />);
  }

  const scale = viewportWidth > 0 ? Math.min(1, viewportWidth / MOBILE_FRAME_WIDTH) : 1;
  const mobileFrameHeight = getMobileFrameHeight(currentPage);

  return withHeader(
    <div className="w-full overflow-x-hidden bg-white">
      <div
        className="mx-auto relative"
        style={{ width: `${MOBILE_FRAME_WIDTH * scale}px`, height: `${mobileFrameHeight * scale}px` }}
      >
        <div
          className="absolute left-0 top-0"
          style={{ width: `${MOBILE_FRAME_WIDTH}px`, transform: `scale(${scale})`, transformOrigin: 'top left' }}
        >
          <MobilePage currentPage={currentPage} onNavigate={handleNavigate} />
        </div>
      </div>
    </div>,
  );
}
