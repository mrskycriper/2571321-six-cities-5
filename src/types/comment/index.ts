import { UserShort } from '@/types/user';

export type Comment = {
  id: string;
  date: string;
  user: UserShort;
  comment: string;
  rating: number;
};
