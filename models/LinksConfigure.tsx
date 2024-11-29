export interface LinksDetails{
    link: string;
    linkName: string;
    icon:string;
}

export interface LinksMenuProps {
    links: LinksDetails[];
  }

export const Links= [
    {
        link: "/",
        linkName: 'Dashboard',
        icon: "carbon:dashboard", 
    },
    {
        link: "/doctor",
        linkName: 'Doctor',
        icon: "mdi:doctor",
    },
    {
        link: "/user",
        linkName: 'User',
        icon: "carbon:user-avatar", 
    },
    {
        link: "/drug",
        linkName: "Drug",
        icon: "mdi:pill", 
    },
]