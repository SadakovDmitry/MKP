import { useEffect, useState } from 'react';
import { type SitePage } from './navigation';

const imgChatGptImage2020251203481 = "http://localhost:3845/assets/9a05eb3c69e44eb9374f6a2b6b8432d5210e8bdc.png";
const imgMkrIcons0003Layer4 = "http://localhost:3845/assets/392e3857209dc66690ca73b8a690e23d914c2f6f.png";
const imgMkrIcons0002Layer3 = "http://localhost:3845/assets/bec0c030b20d45265db78ce720b9e7821571d36a.png";
const imgMkrIcons0004Layer0Copy = "http://localhost:3845/assets/967e1e665c88e5a01a218fecde6762cf105f578c.png";
const imgMkrIcons0001Layer2 = "http://localhost:3845/assets/1a01377457f84ffc40bea44a61f20a55bf14abd5.png";
const imgMkrIcons0000Layer1 = "http://localhost:3845/assets/a47f2e952395700cbc7d73f619fb126302fe4876.png";
const imgPhoto1581847797580A3Ac8010D37C6 = "http://localhost:3845/assets/6826aba9ca6c5754507d0ace4c141b413a723ce2.png";
const imgPhoto1581847797580A3Ac8010D37C4 = "http://localhost:3845/assets/4c40daade4fe15d923424347599abcd4494255dc.png";
const imgPhoto1581847797580A3Ac8010D37C2 = "http://localhost:3845/assets/a3c6acf47334f080ede8b9f1d08b1c29979c7cb7.png";
const imgPhoto1581847797580A3Ac8010D37C3 = "http://localhost:3845/assets/a2690544f5482e64438463611a054497557f0095.png";
const imgPhoto1581847797580A3Ac8010D37C1 = "http://localhost:3845/assets/6e6dc8eaf9c066423b563fe491388fde30f273d3.png";
const imgPhoto1581847797580A3Ac8010D37C5 = "http://localhost:3845/assets/fbe5431bf3142ec8a7e5c55acb501ebdc6476716.png";
const imgVector = "http://localhost:3845/assets/45721801618c04b8d5b31a5597572b9d3e6da2b8.svg";
const imgVector1 = "http://localhost:3845/assets/20ba96200c69778d7033bbee28fe80ff92d15d09.svg";
const imgVector2 = "http://localhost:3845/assets/b644b22fa8721f42839eae50f1394fb5f7246d6c.svg";
const imgVector3 = "http://localhost:3845/assets/afc4dff6a386e5a9bbef91e7deb6f74d4aef0f9f.svg";
const imgGroup = "http://localhost:3845/assets/9797281a12c87b7ae0593e80ffe07a1a0d4c4124.svg";
const imgGroup1 = "http://localhost:3845/assets/ab0b1a956333b2ca75e0ef7344df86b861e5a89b.svg";
const imgGroup2 = "http://localhost:3845/assets/828b4e1b6f7560be0f6a9d2052198211695fdb93.svg";
const imgVector4 = "http://localhost:3845/assets/92bd6b17994701895673ae98ac3d83d15acee971.svg";
const imgFrame13 = "http://localhost:3845/assets/6470d4adf4a48499ba84260d97166147d9ba6e00.svg";
const imgExclude = "http://localhost:3845/assets/41bb729466000182fac8a2ac1a46038576a071ce.svg";
const imgLine1 = "http://localhost:3845/assets/e2e4e9e68b8add3d08d2593c56b508ed8cbf97a7.svg";
const imgVector5 = "http://localhost:3845/assets/720c778192c904fd60a1289ac484a6c657cac233.svg";
const imgExclude1 = "http://localhost:3845/assets/99014d703a291afdf234eb6f59fec6227c1f1c68.svg";
const imgVector6 = "http://localhost:3845/assets/5f3e8aeb6fb2d09565f9912b7518955388199956.svg";
const imgExclude2 = "http://localhost:3845/assets/0b7d9152cdcc38abcd33a65b61632eab52d87fe3.svg";

const FRAME_WIDTH = 1400;
const FRAME_HEIGHT = 5050;

type AboutPageProps = {
  onNavigate: (page: SitePage) => void;
};

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const nextScale = window.innerWidth / FRAME_WIDTH;
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
<div className="content-stretch flex flex-col items-start relative size-full" data-name="О компании" data-node-id="38:275">
      <div className="bg-white h-[700px] overflow-clip relative shrink-0 w-full" data-name="1" data-node-id="38:3">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[var(--color-2,#44b1d2)] h-[47px] left-1/2 overflow-clip rounded-[50px] top-[calc(50%-281.5px)] w-[1160px]" data-node-id="38:4">
          <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-between left-[5px] right-[4.69px] top-1/2" data-node-id="38:5">
            <div className="bg-[var(--color-4,white)] h-[36px] overflow-clip relative rounded-[38.823px] shrink-0 w-[100px]" data-node-id="38:6">
              <div className="absolute contents inset-[13.87%_14%_13.43%_5%]" data-name="Group" data-node-id="38:7">
                <div className="absolute inset-[29.45%_14%_29%_40.48%]" data-name="Vector" data-node-id="38:8">
                  <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
                </div>
                <div className="absolute inset-[15.97%_69.36%_15.49%_5.57%]" data-name="Vector" data-node-id="38:9">
                  <img alt="" className="absolute block max-w-none size-full" src={imgVector1} />
                </div>
                <div className="absolute inset-[47.4%_68.82%_13.43%_14.27%]" data-name="Vector" data-node-id="38:10">
                  <img alt="" className="absolute block max-w-none size-full" src={imgVector2} />
                </div>
                <div className="absolute inset-[13.87%_78.1%_46.96%_5%]" data-name="Vector" data-node-id="38:11">
                  <img alt="" className="absolute block max-w-none size-full" src={imgVector3} />
                </div>
                <div className="absolute inset-[15.95%_74.77%_55.61%_15.63%]" data-name="Group" data-node-id="38:12">
                  <img alt="" className="absolute block max-w-none size-full" src={imgGroup} />
                </div>
                <div className="absolute contents inset-[47.4%_68.82%_14.85%_14.27%]" data-name="Group" data-node-id="38:14">
                  <div className="absolute contents inset-[47.4%_68.82%_14.85%_14.27%]" data-name="Group" data-node-id="38:15">
                    <div className="absolute inset-[47.4%_68.82%_14.85%_14.27%] opacity-70" data-name="Group" data-node-id="38:16">
                      <img alt="" className="absolute block max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
                <div className="absolute contents inset-[15.32%_78.1%_46.93%_5%]" data-name="Group" data-node-id="38:18">
                  <div className="absolute contents inset-[15.32%_78.1%_46.93%_5%]" data-name="Group" data-node-id="38:19">
                    <div className="absolute inset-[15.32%_78.1%_46.93%_5%] opacity-70" data-name="Group" data-node-id="38:20">
                      <img alt="" className="absolute block max-w-none size-full" src={imgGroup2} />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-[56.45%_79.45%_15.52%_11.06%]" data-name="Vector" data-node-id="38:22">
                  <img alt="" className="absolute block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[719.278px]" data-node-id="38:23">
              <button type="button" onClick={() => onNavigate('home')} className="bg-[var(--color-4,white)] border-0 cursor-pointer h-[26.056px] overflow-clip p-0 relative rounded-[38.823px] shrink-0 w-[84.122px]" data-node-id="38:24">
                <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[17.15%_7.45%_17.6%_6.84%] leading-[normal] text-[14.175px] text-[color:var(--color,#1f556b)] text-center whitespace-pre-wrap" data-node-id="38:25" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                  Главная
                </p>
              </button>
              <button type="button" onClick={() => onNavigate('about')} className="bg-[var(--color,#1f556b)] border-0 cursor-pointer h-[26.056px] overflow-clip p-0 relative rounded-[38.823px] shrink-0 w-[119.856px]" data-node-id="38:26">
                <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[17.15%_7.45%_17.6%_6.83%] leading-[normal] text-[14.175px] text-[color:var(--color-4,white)] text-center whitespace-pre-wrap" data-node-id="38:27" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                  О компании
                </p>
              </button>
              <button type="button" onClick={() => onNavigate('services')} className="bg-[var(--color-4,white)] border-0 cursor-pointer h-[26.056px] overflow-clip p-0 relative rounded-[38.823px] shrink-0 w-[70.722px]" data-node-id="38:28">
                <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[17.15%_7.46%_17.6%_6.83%] leading-[normal] text-[14.175px] text-[color:var(--color,#1f556b)] text-center whitespace-pre-wrap" data-node-id="38:29" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                  Услуги
                </p>
              </button>
              <button type="button" onClick={() => onNavigate('cases')} className="bg-[var(--color-4,white)] border-0 cursor-pointer h-[26.056px] overflow-clip p-0 relative rounded-[38.823px] shrink-0 w-[70.722px]" data-node-id="38:30">
                <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[17.15%_7.46%_17.6%_6.83%] leading-[normal] text-[14.175px] text-[color:var(--color,#1f556b)] text-center whitespace-pre-wrap" data-node-id="38:31" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                  Кейсы
                </p>
              </button>
              <button type="button" onClick={() => onNavigate('news')} className="bg-[var(--color-4,white)] border-0 cursor-pointer h-[26.056px] overflow-clip p-0 relative rounded-[38.823px] shrink-0 w-[70.722px]" data-node-id="38:32">
                <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[17.15%_7.46%_17.6%_6.83%] leading-[normal] text-[14.175px] text-[color:var(--color,#1f556b)] text-center whitespace-pre-wrap" data-node-id="38:33" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                  Статьи
                </p>
              </button>
              <button type="button" onClick={() => onNavigate('news')} className="bg-[var(--color-4,white)] border-0 cursor-pointer h-[26.056px] overflow-clip p-0 relative rounded-[38.823px] shrink-0 w-[91.567px]" data-node-id="38:34">
                <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[17.15%_18.9%_17.6%_18.85%] leading-[normal] text-[14.175px] text-[color:var(--color,#1f556b)] text-center" data-node-id="38:35" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                  Новости
                </p>
              </button>
              <button type="button" onClick={() => onNavigate('contacts')} className="bg-[var(--color-4,white)] border-0 cursor-pointer h-[26.056px] overflow-clip p-0 relative rounded-[38.823px] shrink-0 w-[91.567px]" data-node-id="38:36">
                <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[17.15%_7.45%_17.6%_6.83%] leading-[normal] text-[14.175px] text-[color:var(--color,#1f556b)] text-center whitespace-pre-wrap" data-node-id="38:37" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                  Контакты
                </p>
              </button>
            </div>
            <div className="h-[37px] relative shrink-0 w-[37.032px]" data-node-id="38:38">
              <img alt="" className="absolute block max-w-none size-full" src={imgFrame13} />
            </div>
          </div>
        </div>
        <div className="absolute bg-[var(--color-2,#44b1d2)] h-[63px] left-[calc(8.33%+167.33px)] rounded-[31.5px] top-[405px] w-[393px]" data-node-id="38:42" />
        <div className="absolute bg-[var(--color,#1f556b)] h-[63px] left-[calc(50%+49px)] rounded-[31.5px] top-[405px] w-[367px]" data-node-id="38:43" />
        <p className="absolute font-['Geologica:Medium',sans-serif] font-medium leading-[normal] left-[calc(8.33%+167.33px)] not-italic text-[50.081px] text-[color:var(--color-4,white)] text-center top-[405px] h-[63px] w-[393px] flex items-center justify-center" data-node-id="38:44" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          эффективным
        </p>
        <p className="absolute font-['Geologica:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-19px)] not-italic text-[50.081px] text-[color:var(--color-3,#313131)] text-center top-[405px] h-[63px] w-[38px] flex items-center justify-center" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          и
        </p>
        <p className="absolute font-['Geologica:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%+49px)] not-italic text-[50.081px] text-[color:var(--color-4,white)] text-center top-[405px] h-[63px] w-[367px] flex items-center justify-center" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          прибыльным
        </p>
        <p className="-translate-x-1/2 absolute font-['Geologica:Medium',sans-serif] font-medium leading-[1.1] left-[calc(50%-0.5px)] not-italic text-[50.081px] text-[color:var(--color-3,#313131)] text-center top-[calc(50%-73px)] w-[567px] whitespace-pre-wrap" data-node-id="38:45" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          Мы знаем, как сделать ваш бизнес
        </p>
      </div>
      <div className="bg-[var(--color-6,#e2f4fa)] h-[700px] overflow-clip relative shrink-0 w-full" data-name="2" data-node-id="38:46">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[35.71%_57.71%_53.43%_8.57%] leading-none text-[19.22px] text-[color:var(--color-3,#313131)] whitespace-pre-wrap" data-node-id="38:47" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          мы помогаем руководителям эффективно управлять бизнесом, оказываем экспертную поддержку и решаем задачи финансового, кадрового и налогового учёта на предприятиях.
        </p>
        <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[28.71%_76.57%_66.43%_8.57%] leading-none text-[34.149px] whitespace-nowrap text-[color:var(--color,#1f556b)]" data-node-id="38:48" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Более 10 лет
        </p>
        <div className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[55.14%_60.64%_35.14%_8.57%] leading-none text-[34.149px] whitespace-nowrap text-[color:var(--color,#1f556b)]" data-node-id="38:49" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="mb-0">Консалтинговое агентство</p>
          <p>«МКР»</p>
        </div>
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[67%_59.57%_14%_8.57%] leading-none text-[19.22px] text-[color:var(--color-3,#313131)] whitespace-pre-wrap" data-node-id="38:50" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          — это команда опытных бухгалтеров, экономистов и юристов, любящих своё дело
          <br aria-hidden="true" />и заинтересованных в результате. Год за годом мы нарабатывали практику, тщательно анализировали каждый инструмент — и теперь готовы делиться проверенными технологиями, внедряя их в бизнес-процессы вашей компании.
        </p>
        <div className="absolute bg-[var(--color,#1f556b)] h-[401px] left-[calc(50%+10px)] overflow-clip rounded-[40px] text-[19.22px] text-[color:var(--color-4,white)] top-[201px] w-[570px] whitespace-pre-wrap" data-node-id="38:51">
          <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[14.46%_39.82%_66.58%_9.82%] leading-none" data-node-id="38:52" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Наша компания предлагает как комплексные решения
            <br aria-hidden="true" />
            для бизнеса, так
            <br aria-hidden="true" />и отдельные услуги:
          </p>
          <ul className="absolute block font-['Roboto:SemiBold',sans-serif] font-semibold inset-[42.64%_58.25%_14.71%_9.82%] leading-[0] list-disc" data-node-id="38:53" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <li className="mb-0 ms-[28.83px]">
              <span className="leading-none">бухгалтерское сопровождение</span>
            </li>
            <li className="mb-0 ms-[28.83px]">
              <span className="leading-none">управленческий консалтинг</span>
            </li>
            <li className="mb-0 ms-[28.83px]">
              <span className="leading-none">экономический консалтинг</span>
            </li>
            <li className="mb-0 ms-[28.83px]">
              <span className="leading-none">правовой консалтинг</span>
            </li>
            <li className="ms-[28.83px]">
              <span className="leading-none">кадровый учёт</span>
            </li>
          </ul>
        </div>
        <div className="absolute aspect-[264.6060485839844/295] left-[70.79%] right-[4.93%] top-[285px]" data-name="ChatGPT Image 20 окт. 2025 г., 12_03_48 1" data-node-id="38:54">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImage2020251203481} />
        </div>
        <p className="absolute font-['Geologica:Medium',sans-serif] font-medium leading-[1.1] left-[calc(20.83%-171.67px)] not-italic text-[36.648px] text-[color:var(--color,#1f556b)] top-[calc(50%-252px)] uppercase" data-node-id="38:55" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          миссия и ценности
        </p>
      </div>
      <div className="bg-[var(--color-4,white)] h-[500px] leading-none overflow-clip relative shrink-0 text-[color:var(--color-3,#313131)] w-full" data-name="3" data-node-id="38:255">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[33%_29.64%_48%_8.57%] text-[19.22px] whitespace-pre-wrap" data-node-id="38:256" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Его доля составляет 80% от всей нашей деятельности. Сопровождаем непрофильные задачи предприятия, берём на себя бухгалтерский учёт, оптимизируем налоги, т.е. обеспечиваем крепкий финансовый тыл, при котором компания находится в экономической безопасности. Также проводим аудит, исправляем чужие ошибки и восстанавливаем учёт. Сотрудничая
          <br aria-hidden="true" />с нами, можете быть уверенными — ваша бухгалтерия находится в идеальном состоянии.
        </p>
        <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[23%_32.43%_70.2%_8.57%] text-[34.15px] whitespace-nowrap" data-node-id="38:257" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Самое востребованное направление — аутсорсинг.
        </p>
        <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[65.8%_41.93%_22.8%_8.57%] text-[19.22px] whitespace-pre-wrap" data-node-id="38:258" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          К решению каждой задачи подходим индивидуально, учитывая специфику бизнеса, ключевые цели и стратегию развития — поэтому «МКР» давно завоевала репутацию ответственного и надёжного партнёра.
        </p>
      </div>
      <div className="bg-[var(--color,#1f556b)] h-[1100px] overflow-clip relative shrink-0 w-full" data-name="6" data-node-id="38:176">
        <p className="absolute font-['Geologica:Medium',sans-serif] font-medium leading-[1.1] left-[calc(12.5%-55px)] not-italic text-[36.648px] text-[color:var(--color-4,white)] top-[calc(50%-487px)] uppercase" data-node-id="38:177" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          преимущества
        </p>
        <p className="-translate-x-1/2 absolute font-['Geologica:Medium',sans-serif] font-medium leading-none left-1/2 not-italic text-[50.081px] text-[color:var(--color-4,white)] text-center top-[calc(50%+120px)]" data-node-id="38:178" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          Мы любим то, что делаем!
        </p>
        <p className="-translate-x-1/2 absolute bottom-[25.18%] font-['Roboto:Regular',sans-serif] font-normal leading-none left-1/2 text-[34.15px] text-[color:var(--color-4,white)] text-center top-[68.64%] w-[964px] whitespace-pre-wrap" data-node-id="38:179" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Обратитесь к нам — и получите экспертную консультацию по любому вопросу или проблеме вашего бизнеса.
        </p>
        <p className="-translate-x-1/2 absolute bottom-[18.91%] font-['Roboto:Bold',sans-serif] font-bold leading-none left-1/2 text-[34.15px] text-[color:var(--color-4,white)] text-center top-[78%] uppercase whitespace-nowrap" data-node-id="38:180" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Для нас нет проблем — у нас есть оптимальные решения.
        </p>
        <div className="absolute bg-[var(--color-2,#44b1d2)] h-[116.861px] left-[120px] overflow-clip rounded-[20.324px] top-[159px] w-[111.272px]" data-node-id="38:181">
          <div className="absolute h-[60.5px] left-[22.87px] top-[28.45px] w-[64.995px]" data-name="MKR-icons_0003_Layer-4" data-node-id="38:182">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMkrIcons0003Layer4} />
          </div>
        </div>
        <div className="absolute bg-[var(--color-2,#44b1d2)] h-[116.861px] left-[120px] overflow-clip rounded-[20.324px] top-[310.7px] w-[111.272px]" data-node-id="38:183">
          <div className="absolute h-[54.411px] left-[23.38px] top-[31.5px] w-[64.473px]" data-name="MKR-icons_0002_Layer-3" data-node-id="38:184">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMkrIcons0002Layer3} />
          </div>
        </div>
        <div className="absolute bg-[var(--color-2,#44b1d2)] h-[116.861px] left-[120px] overflow-clip rounded-[20.324px] top-[462.41px] w-[111.78px]" data-node-id="38:185">
          <div className="absolute h-[60.887px] left-[26.42px] top-[27.95px] w-[59.019px]" data-name="MKR-icons_0004_Layer-0-copy" data-node-id="38:186">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMkrIcons0004Layer0Copy} />
          </div>
        </div>
        <div className="absolute bg-[var(--color-2,#44b1d2)] h-[116.861px] left-[calc(41.67%+97.85px)] overflow-clip rounded-[20.324px] top-[159px] w-[111.272px]" data-node-id="38:187">
          <div className="absolute h-[63.208px] left-[26.93px] top-[26.93px] w-[57.229px]" data-name="MKR-icons_0001_Layer-2" data-node-id="38:188">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMkrIcons0001Layer2} />
          </div>
        </div>
        <div className="absolute bg-[var(--color-2,#44b1d2)] h-[116.861px] left-[calc(41.67%+97.85px)] overflow-clip rounded-[20.324px] top-[310.7px] w-[111.272px]" data-node-id="38:189">
          <div className="absolute h-[67.694px] left-[21.85px] top-[24.9px] w-[67.458px]" data-name="MKR-icons_0000_Layer-1" data-node-id="38:190">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMkrIcons0000Layer1} />
          </div>
        </div>
        <div className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[15.8%_55.25%_76.2%_18.27%] leading-none text-[21.923px] text-[color:var(--color-4,white)] whitespace-pre-wrap" data-node-id="38:191" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="mb-0">Только проверенные решения</p>
          <p>с гарантированным результатом — каждое из них мы многократно применяли на практике.</p>
        </div>
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[28.66%_57.49%_61.34%_18.23%] leading-none text-[21.923px] text-[color:var(--color-4,white)] whitespace-pre-wrap" data-node-id="38:192" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Консультации для малого, среднего и крупного бизнеса любой формы собственности — мы всегда на связи и готовы оказать экспертную поддержку.
        </p>
        <p className="absolute bottom-[75.13%] font-['Roboto:Regular',sans-serif] font-normal leading-none right-[583.09px] text-[21.923px] text-[color:var(--color-4,white)] top-[14.87%] translate-x-full w-[436.853px] whitespace-pre-wrap" data-node-id="38:193" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Команда специалистов высокой квалификации с опытом работы в вашей отрасли (строительство, торговля, услуги, сельское хозяйство, переработка, промышленное производство и др.).
        </p>
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[28.76%_8.57%_61.24%_58.35%] leading-none text-[21.923px] text-[color:var(--color-4,white)] whitespace-pre-wrap" data-node-id="38:194" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Решаем широкий спектр задач:
          <br aria-hidden="true" />
          от оптимизации учёта и бизнес-процессов до разработки организационно-финансовых схем реализации проектов и создания единого информационного пространства.
        </p>
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[43.38%_54.2%_48.62%_18.27%] leading-none text-[21.923px] text-[color:var(--color-4,white)] whitespace-pre-wrap" data-node-id="38:195" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Сопровождаем любые коммерческие проекты от стартапа до выхода на региональный, федеральный или мировой уровень.
        </p>
        <div className="-translate-x-1/2 absolute h-[64.642px] left-[calc(50%-0.5px)] top-[944px] w-[415px]" data-node-id="38:196">
          <div className="absolute bg-[var(--color-4,white)] inset-0 rounded-[64.642px]" data-node-id="38:197" />
          <p className="absolute font-['Geologica:Light',sans-serif] font-light inset-[29.56%_44.02%_30.22%_7.79%] leading-[0.9] not-italic text-[28.987px] text-[color:var(--color,#1f556b)] tracking-[0.5797px]" data-node-id="38:198" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Написать нам
          </p>
          <div className="absolute inset-[10.01%_1.69%_10.83%_85.98%]" data-name="Exclude" data-node-id="38:199">
            <img alt="" className="absolute block max-w-none size-full" src={imgExclude} />
          </div>
        </div>
      </div>
      <div className="bg-[var(--color-4,white)] h-[1800px] overflow-clip relative shrink-0 w-full" data-name="8" data-node-id="38:211">
        <p className="absolute font-['Geologica:Medium',sans-serif] font-medium leading-[1.1] left-[calc(20.83%-171.67px)] not-italic text-[36.648px] text-[color:var(--color-3,#313131)] top-[calc(50%-784px)] uppercase" data-node-id="38:212" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          Сферы деятельности
        </p>
        <div className="absolute bg-[var(--color,#1f556b)] h-[172px] left-[calc(50%+10px)] overflow-clip rounded-[38.689px] top-[235px] w-[570px]" data-node-id="38:213">
          <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-none left-[185.43px] text-[24.386px] text-[color:var(--color,#1f556b)] text-center top-[193.73px]" data-node-id="38:214" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Подробнее
          </p>
          <p className="absolute font-['Geologica:Bold',sans-serif] font-bold leading-none left-[259px] not-italic text-[25.431px] text-[color:var(--color-4,white)] top-[15px] w-[269px] whitespace-pre-wrap" data-node-id="38:215" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Строительство
          </p>
          <div className="-translate-y-full absolute flex flex-col font-['Geologica:Regular',sans-serif] font-normal justify-end leading-[0] left-[259px] not-italic text-[17.526px] text-[color:var(--color-4,white)] top-[158px] w-[260.793px]" data-node-id="38:216" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            <p className="leading-none whitespace-pre-wrap">Проектирование, промышленное, жилищное, коттеджное строительство</p>
          </div>
          <div className="absolute bg-white h-[143px] left-[15px] overflow-clip rounded-[25px] top-[15px] w-[220px]" data-node-id="38:217">
            <div className="absolute h-[147px] left-0 top-[-2px] w-[220px]" data-name="photo-1581847797580-a3ac8010d37c 6" data-node-id="38:218">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoto1581847797580A3Ac8010D37C6} />
            </div>
          </div>
        </div>
        <div className="absolute bg-[var(--color,#1f556b)] h-[172px] left-[120px] overflow-clip rounded-[38.689px] top-[235px] w-[570px]" data-node-id="38:219">
          <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-none left-[185.43px] text-[24.386px] text-[color:var(--color,#1f556b)] text-center top-[193.73px]" data-node-id="38:220" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Подробнее
          </p>
          <div className="absolute font-['Geologica:Bold',sans-serif] font-bold leading-none left-[259px] not-italic text-[25.431px] text-[color:var(--color-4,white)] top-[15px] w-[269px] whitespace-pre-wrap" data-node-id="38:221" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            <p className="mb-0">Сельское</p>
            <p>хозяйство</p>
          </div>
          <div className="-translate-y-full absolute flex flex-col font-['Geologica:Regular',sans-serif] font-normal justify-end leading-[0] left-[259px] not-italic text-[17.526px] text-[color:var(--color-4,white)] top-[158px] w-[284px]" data-node-id="38:222" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            <p className="leading-none whitespace-pre-wrap">Растениеводство, животноводство, грибоводство, тепличные хозяйства</p>
          </div>
          <div className="absolute bg-white h-[143px] left-[15px] overflow-clip rounded-[25px] top-[15px] w-[220px]" data-node-id="38:223">
            <div className="absolute h-[147px] left-0 top-[-2px] w-[220px]" data-name="photo-1581847797580-a3ac8010d37c 4" data-node-id="38:224">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoto1581847797580A3Ac8010D37C4} />
            </div>
          </div>
        </div>
        <div className="absolute bg-[var(--color,#1f556b)] h-[172px] left-[calc(50%+10px)] overflow-clip rounded-[38.689px] top-[786px] w-[570px]" data-node-id="38:225">
          <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-none left-[185.43px] text-[24.386px] text-[color:var(--color,#1f556b)] text-center top-[193.73px]" data-node-id="38:226" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Подробнее
          </p>
          <p className="absolute font-['Geologica:Bold',sans-serif] font-bold leading-none left-[259px] not-italic text-[25.431px] text-[color:var(--color-4,white)] top-[15px] w-[269px] whitespace-pre-wrap" data-node-id="38:227" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Услуги
          </p>
          <div className="-translate-y-full absolute flex flex-col font-['Geologica:Regular',sans-serif] font-normal justify-end leading-[0] left-[259px] not-italic text-[17.526px] text-[color:var(--color-4,white)] top-[158px] w-[260.793px]" data-node-id="38:228" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            <p className="leading-none whitespace-pre-wrap">Аренда, реклама, складская логистика и грузоперевозки</p>
          </div>
          <div className="absolute bg-white h-[143px] left-[15px] overflow-clip rounded-[25px] top-[15px] w-[220px]" data-node-id="38:229">
            <div className="absolute h-[147px] left-0 top-[-2px] w-[220px]" data-name="photo-1581847797580-a3ac8010d37c 2" data-node-id="38:230">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoto1581847797580A3Ac8010D37C2} />
            </div>
          </div>
        </div>
        <div className="absolute bg-[var(--color,#1f556b)] h-[172px] left-[120px] overflow-clip rounded-[38.689px] top-[786px] w-[570px]" data-node-id="38:231">
          <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-none left-[185.43px] text-[24.386px] text-[color:var(--color,#1f556b)] text-center top-[193.73px]" data-node-id="38:232" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Подробнее
          </p>
          <p className="absolute font-['Geologica:Bold',sans-serif] font-bold leading-none left-[259px] not-italic text-[25.431px] text-[color:var(--color-4,white)] top-[15px] w-[269px] whitespace-pre-wrap" data-node-id="38:233" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Многопрофильные холдинги
          </p>
          <div className="-translate-y-full absolute flex flex-col font-['Geologica:Regular',sans-serif] font-normal justify-end leading-[0] left-[259px] not-italic text-[17.526px] text-[color:var(--color-4,white)] top-[158px] w-[260.793px]" data-node-id="38:234" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            <p className="leading-none whitespace-pre-wrap">Производство, переработка, комплексы замкнутого цикла, торговый дом</p>
          </div>
          <div className="absolute bg-white h-[143px] left-[15px] overflow-clip rounded-[25px] top-[15px] w-[220px]" data-node-id="38:235">
            <div className="absolute h-[142px] left-[-94px] top-0 w-[407px]" data-name="photo-1581847797580-a3ac8010d37c 3" data-node-id="38:236">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoto1581847797580A3Ac8010D37C3} />
            </div>
          </div>
        </div>
        <div className="absolute bg-[var(--color,#1f556b)] h-[172px] left-[calc(50%+10px)] overflow-clip rounded-[38.689px] top-[1337px] w-[570px]" data-node-id="38:237">
          <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-none left-[185.43px] text-[24.386px] text-[color:var(--color,#1f556b)] text-center top-[193.73px]" data-node-id="38:238" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Подробнее
          </p>
          <p className="absolute font-['Geologica:Bold',sans-serif] font-bold leading-none left-[259px] not-italic text-[25.431px] text-[color:var(--color-4,white)] top-[15px] w-[269px] whitespace-pre-wrap" data-node-id="38:239" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Некоммерческие организации
          </p>
          <div className="-translate-y-full absolute flex flex-col font-['Geologica:Regular',sans-serif] font-normal justify-end leading-[0] left-[259px] not-italic text-[17.526px] text-[color:var(--color-4,white)] top-[158px] w-[260.793px]" data-node-id="38:240" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            <p className="leading-none whitespace-pre-wrap">ТСЖ, ДПК, Фонды</p>
          </div>
          <div className="absolute bg-white h-[143px] left-[15px] overflow-clip rounded-[25px] top-[15px] w-[220px]" data-node-id="38:241">
            <div className="absolute h-[147px] left-0 top-[-2px] w-[220px]" data-name="photo-1581847797580-a3ac8010d37c 1" data-node-id="38:242">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoto1581847797580A3Ac8010D37C1} />
            </div>
          </div>
        </div>
        <div className="absolute bg-[var(--color,#1f556b)] h-[172px] left-[120px] overflow-clip rounded-[38.689px] top-[1337px] w-[570px]" data-node-id="38:243">
          <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-none left-[185.43px] text-[24.386px] text-[color:var(--color,#1f556b)] text-center top-[193.73px]" data-node-id="38:244" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Подробнее
          </p>
          <p className="absolute font-['Geologica:Bold',sans-serif] font-bold leading-none left-[259px] not-italic text-[25.431px] text-[color:var(--color-4,white)] top-[15px] w-[269px] whitespace-pre-wrap" data-node-id="38:245" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Торговля
          </p>
          <div className="-translate-y-full absolute flex flex-col font-['Geologica:Regular',sans-serif] font-normal justify-end leading-[0] left-[259px] not-italic text-[17.526px] text-[color:var(--color-4,white)] top-[158px] w-[260.793px]" data-node-id="38:246" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            <p className="leading-none whitespace-pre-wrap">Розничная, оптовая, ВЭД</p>
          </div>
          <div className="absolute bg-white h-[143px] left-[15px] overflow-clip rounded-[25px] top-[15px] w-[220px]" data-node-id="38:247">
            <div className="absolute h-[147px] left-0 top-[-2px] w-[220px]" data-name="photo-1581847797580-a3ac8010d37c 5" data-node-id="38:248">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoto1581847797580A3Ac8010D37C5} />
            </div>
          </div>
        </div>
        <ul className="absolute block font-['Geologica:Regular',sans-serif] font-normal leading-[0] left-[calc(50%+10px)] list-disc not-italic text-[17.526px] text-[color:var(--color-3,#313131)] top-[429px] w-[570px] whitespace-pre-wrap" data-node-id="38:249" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">{`Восстановление бухгалтерского и налогового учета. `}</span>
          </li>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">{`Бюджетирование проектов. `}</span>
          </li>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">
              Внедрение и автоматизация
              <br aria-hidden="true" />
              {`финансового, управленческого учета. `}
            </span>
          </li>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">{`Анализ и оптимизация бизнес-процессов. `}</span>
          </li>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">{`Разработка финансовой, правовой и организационной концепции строительства коттеджных поселков. `}</span>
          </li>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">
              Разработка модели антикризисного
              <br aria-hidden="true" />
              {`управления компании и координация данного проекта. `}
            </span>
          </li>
          <li className="ms-[26.289px]">
            <span className="leading-none">Опыт проведения реорганизации бизнес</span>
          </li>
        </ul>
        <ul className="absolute block font-['Geologica:Regular',sans-serif] font-normal leading-[0] left-[120px] list-disc not-italic text-[17.526px] text-[color:var(--color-3,#313131)] top-[429px] w-[535px] whitespace-pre-wrap" data-node-id="38:250" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">{`Участие в создании, разработке и внедрении проекта «Диверсифицированный Агропромышленный Комплекс с «замкнутым циклом производства (от выращивания кормовой базы, до переработки молочной и мясной продукции и ее реализации покупателю)». `}</span>
          </li>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">
              Разработка концепции проекта «Строительство комплекса по выращиванию шампиньонов с компостным цехом». Подготовка Финансово-экономической модели
              <br aria-hidden="true" />
              {`и Бизнес-плана для данного проекта. `}
            </span>
          </li>
          <li className="ms-[26.289px]">
            <span className="leading-none">Внедрение, постановка и автоматизация бухгалтерского, налогового, управленческого учетов на предприятиях.</span>
          </li>
        </ul>
        <ul className="absolute block font-['Geologica:Regular',sans-serif] font-normal leading-[0] left-[calc(50%+10px)] list-disc not-italic text-[17.526px] text-[color:var(--color-3,#313131)] top-[980px] w-[559px] whitespace-pre-wrap" data-node-id="38:251" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">{`Инициативный аудит компаний. `}</span>
          </li>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">{`Проведение сессий организационного развития, решение стратегических, тактических и операционных задач бизнеса с привлечением сотрудников/команды организации. `}</span>
          </li>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">{`Анализ и построение системы управления финансами. `}</span>
          </li>
          <li className="ms-[26.289px]">
            <span className="leading-none">Ведение бухгалтерского учета.</span>
          </li>
        </ul>
        <ul className="absolute block font-['Geologica:Regular',sans-serif] font-normal leading-[0] left-[120px] list-disc not-italic text-[17.526px] text-[color:var(--color-3,#313131)] top-[980px] w-[570px] whitespace-pre-wrap" data-node-id="38:252" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">
              Оптимизация бизнес-процессов
              <br aria-hidden="true" />
              {`и организационной структуры компаний. `}
            </span>
          </li>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">
              Постановка и автоматизация
              <br aria-hidden="true" />
              {`управленческого учета в группе компаний. `}
            </span>
          </li>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">{`Консолидация управленческой и бухгалтерской отчетности. `}</span>
          </li>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">{`Работа с кредитными портфелями Холдинга. `}</span>
          </li>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">
              Участие в создании и запуске
              <br aria-hidden="true" />
              {`Торгового дома, филиальной сети магазинов. `}
            </span>
          </li>
          <li className="ms-[26.289px]">
            <span className="leading-none">
              Опыт сопровождения и консультирования
              <br aria-hidden="true" />
              {`проектов от "start-up" до выхода на полную мощность.`}
            </span>
          </li>
        </ul>
        <ul className="absolute block font-['Geologica:Regular',sans-serif] font-normal leading-[0] left-[calc(50%+10px)] list-disc not-italic text-[17.526px] text-[color:var(--color-3,#313131)] top-[1531px] w-[570px] whitespace-pre-wrap" data-node-id="38:253" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">{`Регистрация юридических лиц. `}</span>
          </li>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">
              Подготовка документов, регламентирующих
              <br aria-hidden="true" />
              {`деятельность организаций. `}
            </span>
          </li>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">{`Постановка и автоматизация бухгалтерского учета. `}</span>
          </li>
          <li className="ms-[26.289px]">
            <span className="leading-none">Консультации по вопросам налогообложения.</span>
          </li>
        </ul>
        <ul className="absolute block font-['Geologica:Regular',sans-serif] font-normal leading-[0] left-[120px] list-disc not-italic text-[17.526px] text-[color:var(--color-3,#313131)] top-[1531px] w-[570px] whitespace-pre-wrap" data-node-id="38:254" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">{`Разработка учетной политики компаний. `}</span>
          </li>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">{`Создание и развитие команд (постоянных и проектных). `}</span>
          </li>
          <li className="mb-[15px] ms-[26.289px]">
            <span className="leading-none">
              Сопровождение внешнеэкономической
              <br aria-hidden="true" />
              деятельности компаний, осуществляющих
              <br aria-hidden="true" />
              {`экспорт и импорт товаров и услуг. `}
            </span>
          </li>
          <li className="ms-[26.289px]">
            <span className="leading-none">Юридическое сопровождение сделок.</span>
          </li>
        </ul>
      </div>
      <div className="bg-[var(--color-3,#313131)] h-[250px] overflow-clip relative shrink-0 w-[1400px]" data-name="9" data-node-id="38:259">
        <div className="absolute h-0 left-[120px] top-[157px] w-[1160px]" data-node-id="38:260">
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine1} />
          </div>
        </div>
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[18%_83.71%_75.2%_8.57%] leading-[0.9] text-[19.22px] text-[color:var(--color-4,white)]" data-node-id="38:261" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          О компании
        </p>
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[18%_72.93%_75.2%_22.64%] leading-[0.9] text-[19.22px] text-[color:var(--color-4,white)]" data-node-id="38:262" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Услуги
        </p>
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[18%_58.79%_75.2%_36.64%] leading-[0.9] text-[19.22px] text-[color:var(--color-4,white)]" data-node-id="38:263" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Статьи
        </p>
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[31.2%_87.21%_62%_8.57%] leading-[0.9] text-[19.22px] text-[color:var(--color-4,white)]" data-node-id="38:264" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Кейсы
        </p>
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[31.2%_71.07%_62%_22.64%] leading-[0.9] text-[19.22px] text-[color:var(--color-4,white)]" data-node-id="38:265" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Полезное
        </p>
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[31.2%_56.93%_62%_36.64%] leading-[0.9] text-[19.22px] text-[color:var(--color-4,white)]" data-node-id="38:266" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Контакты
        </p>
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[44.4%_83.64%_48.8%_8.57%] leading-[0.9] text-[19.22px] text-[color:var(--color-4,white)]" data-node-id="38:267" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Карта сайта
        </p>
        <p className="absolute font-['Roboto:Light',sans-serif] font-light inset-[69.2%_74.57%_25.2%_8.57%] leading-[0.9] text-[16px] text-[color:var(--color-4,white)]" data-node-id="38:268" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Консалтинговая компания МКР
        </p>
        <p className="absolute font-['Roboto:Light',sans-serif] font-light inset-[69.2%_8.57%_25.2%_57%] leading-[0.9] text-[16px] text-[color:var(--color-4,white)] text-right" data-node-id="38:269" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          © МКР, 2025, All Rights Reserved | Политика Конфиденциальности
        </p>
        <p className="absolute font-['Roboto:Light',sans-serif] font-light inset-[76.8%_62.57%_17.6%_8.57%] leading-[0.9] text-[16px] text-[color:var(--color-4,white)]" data-node-id="38:270" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          г. Москва, Благовещенский пер., дом 3, стр. 1, пом. 1/6
        </p>
        <div className="absolute inset-[18%_8.57%_62.8%_85.86%]" data-name="Vector" data-node-id="38:271">
          <img alt="" className="absolute block max-w-none size-full" src={imgVector5} />
        </div>
        <div className="absolute h-[48px] left-[calc(83.33%-51.67px)] top-[45px] w-[53px]" data-name="Exclude" data-node-id="38:272">
          <img alt="" className="absolute block max-w-none size-full" src={imgExclude1} />
        </div>
        <div className="absolute inset-[18%_27.79%_62.8%_68.64%]" data-name="Vector" data-node-id="177:205">
          <img alt="" className="absolute block max-w-none size-full" src={imgVector6} />
        </div>
        <div className="absolute inset-[18%_22.36%_62.8%_74.21%]" data-name="Exclude" data-node-id="177:206">
          <img alt="" className="absolute block max-w-none size-full" src={imgExclude2} />
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}
