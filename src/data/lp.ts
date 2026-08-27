import type {
  DailyPriceCard,
  FaqItem,
  FlowStep,
  MenuItem,
  NavItem,
  PricePlan,
  WhyBlock,
} from '@/types/lp';

export const NAV_ITEMS: NavItem[] = [
  { id: 'concerns', label: 'こんなお悩みありませんか？' },
  { id: 'why', label: 'ALONAが選ばれる理由' },
  { id: 'pricing', label: '料金プラン' },
  { id: 'payment', label: 'お支払い方法' },
  { id: 'menu', label: 'メニュー紹介' },
  { id: 'flow', label: '初回体験トレーニングの流れ' },
  { id: 'faq', label: 'よくある質問' },
  { id: 'access', label: 'アクセス' },
];

export const DAILY_PRICE_CARDS: DailyPriceCard[] = [
  {
    name: 'パーソナル ピラティス',
    nameLines: ['パーソナル', 'ピラティス'],
    amount: '2,189',
  },
  {
    name: 'セミパーソナルトレーニング',
    nameLines: ['セミパーソナル', 'トレーニング'],
    amount: '935',
  },
  {
    name: 'パーソナルトレーニング',
    nameLines: ['パーソナル', 'トレーニング'],
    amount: '1,650',
  },
];

export const CONCERNS: string[] = [
  'パーソナルジムは高すぎて結局3ヶ月も続かなかった…',
  'ピラティスも筋トレもやりたいけど、別々に通うと費用も時間も2倍に…',
  '肩こり・腰痛、体力の衰え…運動初心者だからついていけるか不安',
  '30分のセッションだと、着替えたらすぐ終わる気がする…',
];

export const WHY_BLOCKS: WhyBlock[] = [
  {
    title: ['他社の「30分」では届かない、', '結果に向き合う「50分」'],
    body: '競合他社に多い「30分」のセッションでは物足りない方に。ALONAでは一人ひとりの身体と丁寧に向き合う「50分間」を確保。ただ安いだけでなく、しっかり動き、正しく整え、1回ごとに身体の変化を実感できる充実の時間を提供します。',
  },
  {
    title: ['「整える」と「鍛える」が、', '1つの店舗で完結'],
    body: 'インナーマッスルを刺激して姿勢・柔軟性・バランスを整える「マシンピラティス」と、筋力・体力を高めて理想のアウトラインを作る「パーソナルトレーニング」。2つを同じ店舗で完結できるため、ブレない理想の身体づくりが目指せます。',
  },
  {
    title: ['続けられる料金設計。', 'それがALONAの本気です'],
    body: 'お客様のトレーニングに直接繋がらないコストをできる限り抑えることで、その分を料金設計に還元しています。運動を一時的なイベントで終わらせず、「一生の健康習慣」に変えていくための価格設計です。',
  },
  {
    title: ['当日キャンセル無料'],
    body: 'ご予約のキャンセルや日時変更は、「前日の午前10時まで」に予約ページよりお手続きをお願いいたします。当日キャンセル・変更はLINE連絡にて可能となります。キャンセル料も発生しません。',
  },
];

export const PRICE_PLANS: PricePlan[] = [
  {
    name: 'パーソナル ピラティス',
    stripes: '/assets/svg/plan-stripes-1.svg',
    rows: [
      { label: '通い放題', price: '43,780', tone: 'lime' },
      { label: '月4回', price: '29,920', tone: 'green' },
      { label: '月2回', price: '15,400', tone: 'cyan' },
    ],
  },
  {
    name: 'セミパーソナルトレーニング',
    stripes: '/assets/svg/plan-stripes-2.svg',
    rows: [
      { label: '通い放題', price: '18,700', tone: 'lime' },
      { label: '月4回', price: '13,200', tone: 'green' },
      { label: '月2回', price: '7,000', tone: 'cyan-dark' },
    ],
  },
  {
    name: 'パーソナルトレーニング',
    stripes: '/assets/svg/plan-stripes-2.svg',
    rows: [
      { label: '通い放題', price: '33,000', tone: 'lime' },
      { label: '月4回', price: '22,200', tone: 'green' },
      { label: '月2回', price: '11,600', tone: 'cyan-dark' },
    ],
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    tag: '整える',
    tagClassName: 'bg-[#af3131]',
    tagWidth: 66,
    title: 'パーソナルピラティス',
    subtitle: '50分/個別',
    body: '骨格から体型を整えるための専用マシンセッション。インナーマッスルを強化し、理想の姿勢・美しいシルエットラインをつくります。',
    image: null,
  },
  {
    tag: '楽しく続ける',
    tagClassName: 'bg-[#1d888f]',
    tagWidth: 105,
    title: 'セミパーソナルトレーニング',
    subtitle: '少人数制',
    body: '最大4名の少人数グループレッスン。丁寧なフォーム指導を受けつつ、同じ目標を持つメンバーと一緒だから、モチベーションが持続します。',
    image: '/assets/images/menu-semi-personal.jpg',
  },
  {
    tag: '鍛える',
    tagClassName: 'bg-[#2e77ca]',
    tagWidth: 63,
    title: 'パーソナルトレーニング',
    subtitle: '50分/個別',
    body: '完全マンツーマンのウェイト＆自体重トレーニング。基礎代謝をアップさせ、健康的に太りにくい美しい身体づくりを加速させます。',
    image: '/assets/images/menu-personal.jpg',
  },
];

export const FLOW_STEPS: FlowStep[] = [
  {
    step: '01',
    title: '予約 (約30秒で完了)',
    body: 'WEBまたは公式LINEから、希望日時を選択してご予約ください。',
  },
  {
    step: '02',
    title: 'ご来店 (手ぶらもOK)',
    body: '動きやすい服装、水分をお持ちください。レンタルウェアのご用意もございます。',
  },
  {
    step: '03',
    title: 'カウンセリング & 体験',
    body: 'プロのトレーナーがあなたのお悩みを聞き、個別のプログラムを約30分体験いただきます。',
  },
  {
    step: '04',
    title: 'フィードバック & 今後のご案内',
    body: '身体の状態に合わせた習慣化のコツをご提案。当日入会で入会金10,000円が無料に！',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '体験当日に必要なものはなんですか？',
    answer:
      'トレーニングで汗をかいてもOKな動きやすいウェア、水分補給の飲料、汗拭き用のタオル、室内用のトレーニングシューズ（無料レンタルあり）をお持ちください。',
  },
  {
    question: '運動初心者でも大丈夫ですか？',
    answer:
      'もちろん大歓迎です！ALONAのお客さまの約8割が初心者からのスタートです。お客さまのレベルや当日の体調に合わせた負荷でパーソナル指導を行います。',
  },
  {
    question: 'ピラティスとトレーニングを同じ日に両方受けることはできますか？',
    answer:
      '申し訳ございません。質の高いレッスン効果を実感いただくため、原則として同日に両方のセッションを連続で受講いただくことは承っておりません。',
  },
  {
    question: 'キャンセルや日時変更の規定はどうなっていますか？',
    answer:
      '前日の午前10時までのご連絡は無料です。当日の急なキャンセルも、公式LINEよりご連絡いただければキャンセル料なしで調整可能です。',
  },
  {
    question: '男性も通うことができますか？年齢制限はありますか？',
    answer:
      '男性のお客様も大歓迎です！20代から60代以上まで、男女問わずそれぞれの目標に向けて幅広く通っていただいております。',
  },
];
