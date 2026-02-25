import type { ComponentType } from 'react';
import Frame83_434 from './mobileAboutFrames/Frame83_434';
import Frame83_1106 from './mobileAboutFrames/Frame83_1106';
import Frame83_1317 from './mobileAboutFrames/Frame83_1317';
import Frame83_1189 from './mobileAboutFrames/Frame83_1189';
import Frame83_916 from './mobileAboutFrames/Frame83_916';
import Frame83_1027 from './mobileAboutFrames/Frame83_1027';
import Frame83_1053 from './mobileAboutFrames/Frame83_1053';
import Frame83_1062 from './mobileAboutFrames/Frame83_1062';
import SharedFooter from './SharedFooter';
import type { SitePage } from './navigation';

export const ABOUT_MOBILE_FRAME_WIDTH = 1080;
export const ABOUT_MOBILE_FRAME_HEIGHT = 18840;

type SectionFrame = {
  key: string;
  height: number;
  Component: ComponentType;
};

const SECTION_STACK: SectionFrame[] = [
  { key: '83:434', height: 1080, Component: Frame83_434 },
  { key: '83:1106', height: 2260, Component: Frame83_1106 },
  { key: '83:1317', height: 1200, Component: Frame83_1317 },
  { key: '83:1189', height: 960, Component: Frame83_1189 },
  { key: '83:916', height: 4500, Component: Frame83_916 },
  { key: '83:1027', height: 2080, Component: Frame83_1027 },
  { key: '83:1053', height: 960, Component: Frame83_1053 },
  { key: '83:1062', height: 4000, Component: Frame83_1062 },
];

type AboutPageMobileProps = {
  onNavigate: (page: SitePage) => void;
};

export default function AboutPageMobile({ onNavigate }: AboutPageMobileProps) {
  const handleWriteToUs = () => {
    window.location.hash = 'home-contact-section';
    onNavigate('home');
  };

  return (
    <div className="content-stretch flex flex-col items-start relative size-full bg-white" data-node-id="83:1717">
      <div className="h-[100px] shrink-0" style={{ width: `${ABOUT_MOBILE_FRAME_WIDTH}px` }} />

      {SECTION_STACK.map(({ key, height, Component }) => {
        if (key === '83:1027') {
          const WriteToUsFrame = Component as ComponentType<{ onWriteToUs?: () => void }>;
          return (
            <div key={key} className="relative shrink-0" style={{ width: `${ABOUT_MOBILE_FRAME_WIDTH}px`, height: `${height}px` }}>
              <WriteToUsFrame onWriteToUs={handleWriteToUs} />
            </div>
          );
        }

        return (
          <div key={key} className="relative shrink-0" style={{ width: `${ABOUT_MOBILE_FRAME_WIDTH}px`, height: `${height}px` }}>
            <Component />
          </div>
        );
      })}

      <div className="relative shrink-0" style={{ width: `${ABOUT_MOBILE_FRAME_WIDTH}px`, height: '1600px' }}>
        <SharedFooter onNavigate={onNavigate} mobileEmbedded />
      </div>

      <div className="h-[100px] shrink-0" style={{ width: `${ABOUT_MOBILE_FRAME_WIDTH}px` }} />
    </div>
  );
}
