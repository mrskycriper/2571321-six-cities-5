import { UserEntity } from '@/types/user';

export type ReviewItem = {
  id: string;
  user: UserEntity;
  stars: 1 | 2 | 3 | 4 | 5;
  text: string;
  datetime: string;
  readableDate: string;
};
