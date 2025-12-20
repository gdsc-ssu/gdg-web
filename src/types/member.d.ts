export interface MemberWebsites {
  github: string;
  linkedin: string;
  instagram: string;
}

export interface Member {
  id: string;
  pictureUrl: string | undefined;
  name: string;
  websites: MemberWebsites;
  part: string;
  comment: string;
  role: string;
}

export interface GenerationInfo {
  id: string;
  title: string;
}

export interface MemberCacheData {
  data: Member[];
  timestamp: number;
}
