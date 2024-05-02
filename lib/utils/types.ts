import { Review, User, Client, Transaction, Category } from '@prisma/client';

export type onSuccessCallback<T = any> = (data?: T) => void;

export type onErrorCallback = (error?: any) => void;

export type ReviewWithUser = Review & {
  user: User;
};

export type FullReviewDetails = Review & {
  client: Client;
  user: User;
  transactions: Transaction[];
};

export type ClientWithReviews = Client & {
  reviews: ReviewWithUser[];
};

export type TransactionWithCategory = Transaction & {
  category: Category;
};
