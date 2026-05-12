export interface GameProseGroup {
  h3?: string;
  ul: string[];
}

export interface GameSectionModel {
  h2: string;
  sectionClass?: 'game-detail-process';
  groups: GameProseGroup[];
}

export interface GameDetailModel {
  slug: string;
  pageTitle: string;
  coverSrc: string;
  coverAlt: string;
  heading: string;
  lead: string;
  sections: GameSectionModel[];
}
