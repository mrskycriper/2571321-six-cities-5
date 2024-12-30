import { UserShort } from '@/types/user';

export type CommentShort = {
  comment: string;
  rating: number;
};

export type CommentLong = CommentShort & {
  id: string;
  date: string;
  user: UserShort;
};
