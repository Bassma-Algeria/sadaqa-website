export type PostType = 'call-for-help' | 'family-in-need' | 'donation' | 'donation-request';
export type DonationCategory =
  | 'food'
  | 'clothes / accessories'
  | 'services'
  | 'electronics / appliances'
  | 'home / furnitures'
  | 'books / magazines'
  | 'sports'
  | 'cosmetics / hygiene'
  | 'animals / accessories'
  | 'games / toys'
  | 'tools'
  | 'health / medicines'
  | 'cars accessories'
  | 'others';

export interface IPost {
  postId: number;
  publisherId: number;
  title: string;
  description: string;
  likesCount: number;
  sharesCount: number;
  thumbnailLink: string;
  postPhotos: string[];
  category: DonationCategory;
  type: PostType;
  wilaya: string;
  commun: string;
  ccp: string;
  ccpKey: string;
  rib: string;
  active: boolean;
  createdAt: string;
}
