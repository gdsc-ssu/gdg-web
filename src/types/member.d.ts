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
  interest: string;
  comment: string;
  roleKey: string;
  role: string;
}

export interface GenerationInfo {
  id: string;
  title: string;
}
