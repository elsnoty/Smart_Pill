export interface LinksDetails{
    link: string;
    linkName: string;
}

export interface LinksMenuProps {
    links: LinksDetails[];
  }

export const Links= [
    {
        link: "/dashboard",
        linkName: 'dashboard'
    },
    {
        link: "/doctor",
        linkName: 'doctor'
    },
    {
        link: "/user",
        linkName: 'user'
    },
    {
        link: "/drug",
        linkName: "drug"
    },
]