export type PostType = 'call_for_help' | 'family_in_need' | 'donation' | 'donation_request';
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
  post_id: number;
  user_id: number;
  title: string;
  description: string;
  likes_count: number;
  shares_count: number;
  thumbnail_link: string;
  postPhotos: string[];
  category: DonationCategory;
  type: PostType;
  wilaya: string;
  commun: string;
  ccp: string;
  ccp_key: string;
  rib: string;
  active: boolean;
  created_at: string;
}
