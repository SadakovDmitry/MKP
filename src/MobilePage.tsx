import MobileHero from './mobileSections/MobileHero';
import MobileAdvantages from './mobileSections/MobileAdvantages';
import MobileServices from './mobileSections/MobileServices';
import MobileCases from './mobileSections/MobileCases';
import MobileNews from './mobileSections/MobileNews';
import MobileContact from './mobileSections/MobileContact';
import MobileNewsPage from './mobileSections/MobileNewsPage';
import SharedFooter from './SharedFooter';
import type { SitePage } from './navigation';
import type { CasesFilterLabel } from './casesFilters';

export const MOBILE_FRAME_WIDTH = 1080;
export const MOBILE_HOME_FRAME_HEIGHT = 18160;
export const MOBILE_CONSTRUCTION_FRAME_HEIGHT = 3520;
export const MOBILE_NEWS_FRAME_HEIGHT = 5440;

export const getMobileFrameHeight = (page: SitePage) =>
  page === 'home' ? MOBILE_HOME_FRAME_HEIGHT : page === 'news' ? MOBILE_NEWS_FRAME_HEIGHT : MOBILE_CONSTRUCTION_FRAME_HEIGHT;

type MobilePageProps = {
  currentPage: SitePage;
  onNavigate: (page: SitePage) => void;
  onOpenCasesByFilter: (filter: CasesFilterLabel) => void;
  onOpenFirstArticle: () => void;
  onOpenSecondArticle: () => void;
  onOpenThirdArticle: () => void;
};

export default function MobilePage({
  currentPage,
  onNavigate,
  onOpenCasesByFilter,
  onOpenFirstArticle,
  onOpenSecondArticle,
  onOpenThirdArticle,
}: MobilePageProps) {
  const isHome = currentPage === 'home';
  const isNewsPage = currentPage === 'news';

  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="83:1716">
      <div className="relative shrink-0" style={{ width: `${MOBILE_FRAME_WIDTH}px`, height: isNewsPage ? '1080px' : '1920px' }}>
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
            <MobileCases onOpenCasesByFilter={onOpenCasesByFilter} />
          </div>
          <div className="relative shrink-0" style={{ width: `${MOBILE_FRAME_WIDTH}px`, height: '3440px' }}>
            <MobileNews />
          </div>
          <div className="relative shrink-0" style={{ width: `${MOBILE_FRAME_WIDTH}px`, height: '1600px' }}>
            <MobileContact />
          </div>
        </>
      )}

      {isNewsPage && (
        <div className="relative shrink-0" style={{ width: `${MOBILE_FRAME_WIDTH}px`, height: '2760px' }}>
          <MobileNewsPage
            onOpenFirstArticle={onOpenFirstArticle}
            onOpenSecondArticle={onOpenSecondArticle}
            onOpenThirdArticle={onOpenThirdArticle}
          />
        </div>
      )}

      <div className="relative shrink-0" style={{ width: `${MOBILE_FRAME_WIDTH}px`, height: '1600px' }}>
        <SharedFooter onNavigate={onNavigate} mobileEmbedded />
      </div>
    </div>
  );
}
