import MobileHero from './mobileSections/MobileHero';
import MobileAdvantages from './mobileSections/MobileAdvantages';
import MobileServices from './mobileSections/MobileServices';
import MobileCases from './mobileSections/MobileCases';
import MobileNews from './mobileSections/MobileNews';
import MobileContact from './mobileSections/MobileContact';
import MobileFooter from './mobileSections/MobileFooter';
import type { SitePage } from './navigation';

export const MOBILE_FRAME_WIDTH = 1080;
export const MOBILE_HOME_FRAME_HEIGHT = 18160;
export const MOBILE_CONSTRUCTION_FRAME_HEIGHT = 3520;

export const getMobileFrameHeight = (page: SitePage) =>
  page === 'home' ? MOBILE_HOME_FRAME_HEIGHT : MOBILE_CONSTRUCTION_FRAME_HEIGHT;

type MobilePageProps = {
  currentPage: SitePage;
  onNavigate: (page: SitePage) => void;
};

export default function MobilePage({ currentPage, onNavigate }: MobilePageProps) {
  const isHome = currentPage === 'home';

  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="83:1716">
      <div className="relative shrink-0" style={{ width: `${MOBILE_FRAME_WIDTH}px`, height: '1920px' }}>
        <MobileHero currentPage={currentPage} onNavigate={onNavigate} />
      </div>

      {isHome && (
        <>
          <div className="relative shrink-0" style={{ width: `${MOBILE_FRAME_WIDTH}px`, height: '1920px' }}>
            <MobileAdvantages />
          </div>
          <div className="relative shrink-0" style={{ width: `${MOBILE_FRAME_WIDTH}px`, height: '3640px' }}>
            <MobileServices />
          </div>
          <div className="relative shrink-0" style={{ width: `${MOBILE_FRAME_WIDTH}px`, height: '3840px' }}>
            <MobileCases />
          </div>
          <div className="relative shrink-0" style={{ width: `${MOBILE_FRAME_WIDTH}px`, height: '3440px' }}>
            <MobileNews />
          </div>
          <div className="relative shrink-0" style={{ width: `${MOBILE_FRAME_WIDTH}px`, height: '1600px' }}>
            <MobileContact />
          </div>
        </>
      )}

      <div className="relative shrink-0" style={{ width: `${MOBILE_FRAME_WIDTH}px`, height: '1600px' }}>
        <MobileFooter />
      </div>
    </div>
  );
}
