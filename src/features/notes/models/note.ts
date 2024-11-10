export interface Note {
  id: string;
  content: string;
  isPrivate: boolean;
  user: User;
}

export interface User {
  id: string;
  name: string;
}
