export interface NavItem {
  label: string;
  url: string;
  items?: NavItem[];
}

export const navData: NavItem[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Services",
    url: "/about",
    items: [
      {
        label: "Sublink 1",
        url: "/about/about",
      },
      {
        label: "Sublink 2",
        url: "/about/about",
      },
      {
        label: "Sublink 2",
        url: "/about/about",
      },
      {
        label: "Sublink 2",
        url: "/about/about",
      },
      {
        label: "Sublink 2",
        url: "/about/about",
      },
      {
        label: "Sublink 2",
        url: "/about/about",
      },
      {
        label: "Sublink 2",
        url: "/about/about",
      },
    ],
  },
  {
    label: "Dropdown",
    url: "/Downdrop",
    items: [
      {
        label: "Sublink 1",
        url: "/about/about",
      },
      {
        label: "Sublink 2",
        url: "/about/about",
      },
      {
        label: "Sublink 2",
        url: "/about/about",
      },
      {
        label: "Sublink 2",
        url: "/about/about",
      },
      {
        label: "Sublink 2",
        url: "/about/about",
      },
      {
        label: "Sublink 2",
        url: "/about/about",
      },
      {
        label: "Sublink 2",
        url: "/about/about",
      },
    ],
  },
];
