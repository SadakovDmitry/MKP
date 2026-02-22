import { useEffect, useState } from 'react';
import { PAGE_LABELS, type SitePage } from './navigation';

const imgVector = '/assets/45721801618c04b8d5b31a5597572b9d3e6da2b8.svg';
const imgVector1 = '/assets/20ba96200c69778d7033bbee28fe80ff92d15d09.svg';
const imgVector2 = '/assets/b644b22fa8721f42839eae50f1394fb5f7246d6c.svg';
const imgVector3 = '/assets/afc4dff6a386e5a9bbef91e7deb6f74d4aef0f9f.svg';
const imgGroup = '/assets/9797281a12c87b7ae0593e80ffe07a1a0d4c4124.svg';
const imgGroup1 = '/assets/ab0b1a956333b2ca75e0ef7344df86b861e5a89b.svg';
const imgGroup2 = '/assets/828b4e1b6f7560be0f6a9d2052198211695fdb93.svg';
const imgVector4 = '/assets/92bd6b17994701895673ae98ac3d83d15acee971.svg';
const imgFrame13 = '/assets/552b828f557817905235015c2dad5dabdcd75d06.svg';

const imgLine1 = '/assets/7918af23ed3296b8e767190c8279c0139f0ec990.svg';
const imgVector5 = '/assets/720c778192c904fd60a1289ac484a6c657cac233.svg';
const imgExclude3 = '/assets/99014d703a291afdf234eb6f59fec6227c1f1c68.svg';
const imgExclude4 = '/assets/0b7d9152cdcc38abcd33a65b61632eab52d87fe3.svg';
const imgVector6 = '/assets/5f3e8aeb6fb2d09565f9912b7518955388199956.svg';

const FRAME_WIDTH = 1400;
const FRAME_HEIGHT = 950;

type DesktopConstructionPageProps = {
  currentPage: SitePage;
  onNavigate: (page: SitePage) => void;
};

export default function DesktopConstructionPage({ currentPage, onNavigate }: DesktopConstructionPageProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const nextScale = Math.min(1, window.innerWidth / FRAME_WIDTH);
      setScale(nextScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <div className="mx-auto relative" style={{ width: `${FRAME_WIDTH * scale}px`, height: `${FRAME_HEIGHT * scale}px` }}>
        <div
          className="absolute left-0 top-0"
          style={{ width: `${FRAME_WIDTH}px`, transform: `scale(${scale})`, transformOrigin: 'top left' }}
        >
          <div className="content-stretch flex flex-col items-start relative size-full">
            <div className="bg-white h-[700px] overflow-clip relative shrink-0 w-full">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[var(--color-2,#44b1d2)] h-[47px] left-1/2 overflow-clip rounded-[50px] top-[calc(50%-281.5px)] w-[1160px]" data-node-id="78:40">
                <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-between left-[5px] right-[4.69px] top-1/2" data-node-id="78:41">
                  <div className="bg-[var(--color-4,white)] h-[36px] overflow-clip relative rounded-[38.823px] shrink-0 w-[100px]" data-node-id="78:42">
                    <div className="absolute contents inset-[13.87%_14%_13.43%_5%]" data-name="Group" data-node-id="78:43">
                      <div className="absolute inset-[29.45%_14%_29%_40.48%]" data-name="Vector" data-node-id="78:44">
                        <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
                      </div>
                      <div className="absolute inset-[15.97%_69.36%_15.49%_5.57%]" data-name="Vector" data-node-id="78:45">
                        <img alt="" className="absolute block max-w-none size-full" src={imgVector1} />
                      </div>
                      <div className="absolute inset-[47.4%_68.82%_13.43%_14.27%]" data-name="Vector" data-node-id="78:46">
                        <img alt="" className="absolute block max-w-none size-full" src={imgVector2} />
                      </div>
                      <div className="absolute inset-[13.87%_78.1%_46.96%_5%]" data-name="Vector" data-node-id="78:47">
                        <img alt="" className="absolute block max-w-none size-full" src={imgVector3} />
                      </div>
                      <div className="absolute inset-[15.95%_74.77%_55.61%_15.63%]" data-name="Group" data-node-id="78:48">
                        <img alt="" className="absolute block max-w-none size-full" src={imgGroup} />
                      </div>
                      <div className="absolute contents inset-[47.4%_68.82%_14.85%_14.27%]" data-name="Group" data-node-id="78:50">
                        <div className="absolute contents inset-[47.4%_68.82%_14.85%_14.27%]" data-name="Group" data-node-id="78:51">
                          <div className="absolute inset-[47.4%_68.82%_14.85%_14.27%] opacity-70" data-name="Group" data-node-id="78:52">
                            <img alt="" className="absolute block max-w-none size-full" src={imgGroup1} />
                          </div>
                        </div>
                      </div>
                      <div className="absolute contents inset-[15.32%_78.1%_46.93%_5%]" data-name="Group" data-node-id="78:54">
                        <div className="absolute contents inset-[15.32%_78.1%_46.93%_5%]" data-name="Group" data-node-id="78:55">
                          <div className="absolute inset-[15.32%_78.1%_46.93%_5%] opacity-70" data-name="Group" data-node-id="78:56">
                            <img alt="" className="absolute block max-w-none size-full" src={imgGroup2} />
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-[56.45%_79.45%_15.52%_11.06%]" data-name="Vector" data-node-id="78:58">
                        <img alt="" className="absolute block max-w-none size-full" src={imgVector4} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[719.278px]" data-node-id="78:59">
                    <button type="button" onClick={() => onNavigate('home')} className="bg-[var(--color-4,white)] border-0 cursor-pointer h-[26.056px] overflow-clip p-0 relative rounded-[38.823px] shrink-0 w-[84.122px]" data-node-id="78:60">
                      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[17.15%_7.45%_17.6%_6.84%] leading-[normal] text-[14.175px] text-[color:var(--color,#1f556b)] text-center whitespace-pre-wrap" data-node-id="78:61" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Главная
                      </p>
                    </button>
                    <button type="button" onClick={() => onNavigate('about')} className="bg-[var(--color-4,white)] border-0 cursor-pointer h-[26.056px] overflow-clip p-0 relative rounded-[38.823px] shrink-0 w-[119.856px]" data-node-id="78:62">
                      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[17.15%_7.45%_17.6%_6.83%] leading-[normal] text-[14.175px] text-[color:var(--color,#1f556b)] text-center whitespace-pre-wrap" data-node-id="78:63" style={{ fontVariationSettings: "'wdth' 100" }}>
                        О компании
                      </p>
                    </button>
                    <button type="button" onClick={() => onNavigate('services')} className="bg-[var(--color-4,white)] border-0 cursor-pointer h-[26.056px] overflow-clip p-0 relative rounded-[38.823px] shrink-0 w-[70.722px]" data-node-id="78:64">
                      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[17.15%_7.46%_17.6%_6.83%] leading-[normal] text-[14.175px] text-[color:var(--color,#1f556b)] text-center whitespace-pre-wrap" data-node-id="78:65" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Услуги
                      </p>
                    </button>
                    <button type="button" onClick={() => onNavigate('cases')} className="bg-[var(--color-4,white)] border-0 cursor-pointer h-[26.056px] overflow-clip p-0 relative rounded-[38.823px] shrink-0 w-[70.722px]" data-node-id="78:66">
                      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[17.15%_7.46%_17.6%_6.83%] leading-[normal] text-[14.175px] text-[color:var(--color,#1f556b)] text-center whitespace-pre-wrap" data-node-id="78:67" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Кейсы
                      </p>
                    </button>
                    <button type="button" onClick={() => onNavigate('news')} className="bg-[var(--color-4,white)] border-0 cursor-pointer h-[27px] overflow-clip p-0 relative rounded-[38.823px] shrink-0 w-[145px]" data-node-id="78:68">
                      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[17.15%_7.46%_-47.64%_6.83%] leading-[normal] text-[14.175px] text-[color:var(--color,#1f556b)] text-center whitespace-pre-wrap" data-node-id="78:69" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Статьи и новости
                      </p>
                    </button>
                    <button type="button" onClick={() => onNavigate('contacts')} className="bg-[var(--color-4,white)] border-0 cursor-pointer h-[26.056px] overflow-clip p-0 relative rounded-[38.823px] shrink-0 w-[91.567px]" data-node-id="78:70">
                      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[17.15%_7.45%_17.6%_6.83%] leading-[normal] text-[14.175px] text-[color:var(--color,#1f556b)] text-center whitespace-pre-wrap" data-node-id="78:71" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Контакты
                      </p>
                    </button>
                  </div>
                  <div className="h-[37px] relative shrink-0 w-[37.032px]" data-node-id="78:72">
                    <img alt="" className="absolute block max-w-none size-full" src={imgFrame13} />
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-0 top-[280px] flex flex-col items-center gap-6">
                <p className="font-['Geologica:Medium',sans-serif] font-medium leading-[1.1] not-italic text-[46px] text-[color:var(--color-3,#313131)] text-center uppercase" style={{ fontVariationSettings: "'CRSV' 0, 'SHRP' 0" }}>
                  {PAGE_LABELS[currentPage]}
                </p>
                <p className="font-['Geologica:Medium',sans-serif] font-medium leading-[1.1] not-italic text-[38px] text-[color:var(--color,#1f556b)] text-center" style={{ fontVariationSettings: "'CRSV' 0, 'SHRP' 0" }}>
                  Страница в разработке
                </p>
              </div>
            </div>

            <div className="bg-[var(--color-3,#313131)] h-[250px] overflow-clip relative shrink-0 w-[1400px]" data-name="20" data-node-id="78:470">
              <div className="absolute h-0 left-[120px] top-[157px] w-[1160px]" data-node-id="78:471">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine1} />
                </div>
              </div>
              <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[18%_83.71%_75.2%_8.57%] leading-[0.9] text-[19.22px] text-[color:var(--color-4,white)]" data-node-id="78:472" style={{ fontVariationSettings: "'wdth' 100" }}>
                О компании
              </p>
              <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[18%_72.93%_75.2%_22.64%] leading-[0.9] text-[19.22px] text-[color:var(--color-4,white)]" data-node-id="78:473" style={{ fontVariationSettings: "'wdth' 100" }}>
                Услуги
              </p>
              <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[18%_58.79%_75.2%_36.64%] leading-[0.9] text-[19.22px] text-[color:var(--color-4,white)]" data-node-id="78:474" style={{ fontVariationSettings: "'wdth' 100" }}>
                Статьи
              </p>
              <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[31.2%_87.21%_62%_8.57%] leading-[0.9] text-[19.22px] text-[color:var(--color-4,white)]" data-node-id="78:475" style={{ fontVariationSettings: "'wdth' 100" }}>
                Кейсы
              </p>
              <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[31.2%_71.07%_62%_22.64%] leading-[0.9] text-[19.22px] text-[color:var(--color-4,white)]" data-node-id="78:476" style={{ fontVariationSettings: "'wdth' 100" }}>
                Полезное
              </p>
              <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[31.2%_56.93%_62%_36.64%] leading-[0.9] text-[19.22px] text-[color:var(--color-4,white)]" data-node-id="78:477" style={{ fontVariationSettings: "'wdth' 100" }}>
                Контакты
              </p>
              <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[44.4%_83.64%_48.8%_8.57%] leading-[0.9] text-[19.22px] text-[color:var(--color-4,white)]" data-node-id="78:478" style={{ fontVariationSettings: "'wdth' 100" }}>
                Карта сайта
              </p>
              <p className="absolute font-['Roboto:Light',sans-serif] font-light inset-[69.2%_74.57%_25.2%_8.57%] leading-[0.9] text-[16px] text-[color:var(--color-4,white)]" data-node-id="78:479" style={{ fontVariationSettings: "'wdth' 100" }}>
                Консалтинговая компания МКР
              </p>
              <p className="absolute font-['Roboto:Light',sans-serif] font-light inset-[69.2%_8.57%_25.2%_57%] leading-[0.9] text-[16px] text-[color:var(--color-4,white)] text-right" data-node-id="78:480" style={{ fontVariationSettings: "'wdth' 100" }}>
                © МКР, 2025, All Rights Reserved | Политика Конфиденциальности
              </p>
              <p className="absolute font-['Roboto:Light',sans-serif] font-light inset-[76.8%_62.57%_17.6%_8.57%] leading-[0.9] text-[16px] text-[color:var(--color-4,white)]" data-node-id="78:481" style={{ fontVariationSettings: "'wdth' 100" }}>
                г. Москва, Благовещенский пер., дом 3, стр. 1, пом. 1/6
              </p>
              <div className="absolute inset-[18%_8.57%_62.8%_85.86%]" data-name="Vector" data-node-id="78:482">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector5} />
              </div>
              <div className="absolute h-[48px] left-[calc(83.33%-51.67px)] top-[45px] w-[53px]" data-name="Exclude" data-node-id="78:483">
                <img alt="" className="absolute block max-w-none size-full" src={imgExclude3} />
              </div>
              <div className="absolute inset-[18%_22.36%_62.8%_74.21%]" data-name="Exclude" data-node-id="78:484">
                <img alt="" className="absolute block max-w-none size-full" src={imgExclude4} />
              </div>
              <div className="absolute inset-[18%_27.79%_62.8%_68.64%]" data-name="Vector" data-node-id="177:215">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
