export interface AboutTabs {
  id: number;
  title: string;
  detail: AboutTabsDetail[];
}

export interface AboutTabsDetail {
  title: string;
  subtitle: string;
  text: string;
}

export type SkillIcon =
  | 'code'
  | 'images'
  | 'mobile'
  | 'server'
  | 'eye'
  | 'chart';

export interface Skill {
  title: string;
  icon: SkillIcon;
  text: string;
}

export interface PortfolioItem {
  id: number;
  date: string;
  title: string;
  client: string;
  image: string;
}
