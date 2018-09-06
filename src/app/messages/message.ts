export interface Message {
  id: number;
  subject: string;
  message: string;
  createDate: Date;
  userId: number;
  author: string;
  toUser: string;
}
