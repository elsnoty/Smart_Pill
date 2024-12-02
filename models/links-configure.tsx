export interface LinksDetails {
  link: string;
  linkName: string;
  icon: string;
}

export interface LinksMenuProps {
  links: LinksDetails[];
}

export const Links: LinksDetails[] = [
  { link: "", linkName: "", icon: "" },
  {
    link: "/dashboard",
    linkName: "Dashboard",
    icon: "carbon:dashboard",
  },
  {
    link: "dashboard/doctor",
    linkName: "Doctor",
    icon: "mdi:doctor",
  },
  {
    link: "dashboard/user",
    linkName: "User",
    icon: "carbon:user-avatar",
  },
  {
    link: "dashboard/drug",
    linkName: "Drug",
    icon: "mdi:pill",
  },
];
