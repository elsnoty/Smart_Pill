import { LinksDetails, LinksMenuProps } from "@/models/links-configure";

export const generateBreadcrumbs = ({
  pathname,
  links,
}: {
  pathname: string;
  links: LinksDetails[];
}) => {
  const segments = pathname.slice(1).split("/");
  let currentPath = "";

  return segments.map((segment) => {
    currentPath += `/${segment}`;
    const matchedLink = links.find((link) => link.link === currentPath);

    if (matchedLink) {
      return {
        label: matchedLink.label,
        href: matchedLink.link,
        active: currentPath === pathname,
      };
    }

    return {
      label: segment,
      href: currentPath,
      active: currentPath === pathname,
    };
  });
};
