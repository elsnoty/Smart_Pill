export type Role = "ADMIN" | "USER" | null | undefined;
export interface user {
  id?: string;
  name?: string;
  email?: string;
  role: Role;
  token: string;
}

export interface LinksDetails {
  link: string;
  label: string;
  icon: string;
}

export type ToastType = "info" | "success" | "error" | "warning";

export interface Toast {
  id: number;
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: (id: number) => void;
}
