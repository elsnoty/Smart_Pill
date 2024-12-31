export type Role = "ADMIN" | "USER" | null | undefined;
export interface user {
  id: string;
  userName: string;
  email: string;
  role: Role;
  token: string;
}

export interface LinksDetails {
  link: string;
  label: string;
  icon: string;
}
