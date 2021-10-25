export interface AboutTabs {
  /** Skill unique identifier */
  id: number,
  /** Skill title */
  title: string,
  detail: AboutTabsDetail[];
}

export interface AboutTabsDetail {
  /** Title of Skill Detail */
  title: string,
  subtitle: string,
  text: string,
}

export interface Skill {
  title: string,
  icon: string,
  text: string,
}

export interface PortfolioCard {
  id: number,
  date: string,
  title: string,
  client: string,
  image: string,
}
