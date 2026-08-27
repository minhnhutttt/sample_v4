export type SectionId =
  | 'concerns'
  | 'why'
  | 'pricing'
  | 'payment'
  | 'menu'
  | 'flow'
  | 'faq'
  | 'access';

export type NavItem = {
  id: SectionId;
  label: string;
};

export type DailyPriceCard = {
  name: string;
  /** SP layout stacks the plan name over two lines (Figma node 1:917). */
  nameLines: [string, string];
  amount: string;
};

export type WhyBlock = {
  title: string[];
  body: string;
};

export type PlanRowTone = 'lime' | 'green' | 'cyan' | 'cyan-dark';

export type PlanRow = {
  label: string;
  price: string;
  tone: PlanRowTone;
};

export type PricePlan = {
  name: string;
  stripes: string;
  rows: PlanRow[];
};

export type MenuItem = {
  tag: string;
  tagClassName: string;
  tagWidth: number;
  title: string;
  subtitle: string;
  body: string;
  image: string | null;
};

export type FlowStep = {
  step: string;
  title: string;
  body: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
