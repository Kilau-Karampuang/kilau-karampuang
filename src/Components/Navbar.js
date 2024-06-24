import Link from "next/link";

const NavItem = ({ href, label }) => {
    return (
        <Link href={href}>
            {label}
        </Link>
    );
  };

const Navbar = () => {
    const links = [
        { href: '/profile', label: 'Profile' },
        { href: '/wisata', label: 'Wisata' },
        { href: '/umkm', label: 'UMKM' },
        { href: '/peta', label: 'Peta' },
        { href: '/kkn', label: 'KKN' },
    ];

    return (
      <div className="fixed w-full z-50">
        <nav className="mt-6 mx-10 px-6 py-2 bg-white text-black font-montserrat bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-full flex justify-end items-center">
          <div className="flex space-x-8">
              {links.map((link, index) => (
                  <NavItem key={index} href={link.href} label={link.label} />
              ))}
          </div>
        </nav>  
      </div>
    );
  };
  
  export default Navbar;