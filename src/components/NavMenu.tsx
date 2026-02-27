interface NavMenuProps {
  activeSection?: string;
}

const navItems = [
  { label: "Mission", href: "#mission" },
  { label: "Recordings", href: "#recordings" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
  { label: "Support Us", href: "#support" },
];

const NavMenu = ({ activeSection }: NavMenuProps) => (
  <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-2 mb-1">
    {navItems.map((item) => (
      <a
        key={item.href}
        href={item.href}
        className="text-primary no-underline tracking-wide transition-colors hover:text-accent text-base sm:text-xl md:text-2xl"
        style={{ fontFamily: "'BerkahiBlackletter', serif" }}
      >
        {item.label}
      </a>
    ))}
  </nav>
);

export default NavMenu;
