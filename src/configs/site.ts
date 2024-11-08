export const links = {
  home: "/",
  about: "/about",
  services: "/services",
  blogs: "/blogs",
  courses: "/courses",
  contact: "/contact",
} as const;

export const navLinks = [
  { href: links.home, label: "Home" },
  { href: links.about, label: "About" },
  { href: links.services, label: "Services" },
  { href: links.blogs, label: "Blogs" },
  { href: links.courses, label: "Learn" },
  { href: links.contact, label: "Contact" },
];
