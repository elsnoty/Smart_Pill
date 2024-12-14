export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}
export interface user {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  token: string;
}
