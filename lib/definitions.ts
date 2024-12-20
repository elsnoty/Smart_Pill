export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}
export interface user {
  id: string;
  name: string;
  email: string;
  role: Role;
  token: string;
}

export interface LinksDetails {
  link: string;
  label: string;
  icon: string;
}
