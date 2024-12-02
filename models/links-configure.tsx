export interface LinksDetails {
  link: string;
  label: string;
  icon: string;
}

export interface LinksMenuProps {
  links: LinksDetails[];
}

export const Links: LinksDetails[] = [
  {
    link: "/dashboard",
    label: "Dashboard",
    icon: "carbon:dashboard",
  },
  {
    link: "/dashboard/doctor",
    label: "Doctor",
    icon: "mdi:doctor",
  },
  {
    link: "dashboard/user",
    label: "User",
    icon: "carbon:user-avatar",
  },
  {
    link: "dashboard/drug",
    label: "Drug",
    icon: "mdi:pill",
  },
];
