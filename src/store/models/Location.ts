
export interface ContactInfo {
  globe: number;
  smart: number;
}

export interface Branch {
  id: number;
  name: string;
  location: string;
  contact: ContactInfo;
  facebookPage: string;
}