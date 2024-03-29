export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Shoppey",
  description: "Shop whatever you need.",
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],

  categories: [
    { name: "furniture" },
    { name: "bags" },
    { name: "shoes" },
    { name: "travel" },
    { name: "technology" },
    { name: "books" },
  ],
};
