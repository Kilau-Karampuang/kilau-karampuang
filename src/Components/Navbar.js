import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavItem = ({ href, label }) => {
  return <Link href={href}>{label}</Link>;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: "/", label: "Beranda" },
    { href: "/profile", label: "Profile" },
    { href: "/wisata", label: "Wisata" },
    { href: "/peta", label: "Peta" },
  ];

  return (
    <div className="fixed w-full z-50">
      <nav className="mt-6 mx-10 px-6 bg-white text-black font-montserrat bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-full flex justify-between items-center">
        <Link href="/">
          <Image src="/Logo.png" width={30} height={30} alt="Logo" />
        </Link>
        <div className="hidden md:flex space-x-8 py-2">
          {links.map((link, index) => (
            <NavItem key={index} href={link.href} label={link.label} />
          ))}
          <div className="relative group text-black">
            <button className="text-black">Budaya</button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link href="/tarian">
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Tarian
                </span>
              </Link>
            </div>
          </div>
          <div className="relative group text-black">
            <button className="text-black">Layanan Desa</button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link href="/berita">
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Berita Desa
                </span>
              </Link>
              <Link href="/stunting-calculator">
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Kalkulator Stunting
                </span>
              </Link>
              <Link href="/tinggi-potensi-genetik">
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Kalkulator TPG
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white rounded-md shadow-lg mt-2 mx-10 p-4">
          <div className="flex flex-col gap-2">
            {links.map((link, index) => (
              <NavItem key={index} href={link.href} label={link.label} />
            ))}
          </div>
          <div className="relative group text-black">
            <button className="w-full text-left py-2">Budaya</button>
            <div className="bg-white rounded-md shadow-lg">
              <Link href="/tarian">
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Tarian
                </span>
              </Link>
            </div>
          </div>
          <div className="relative group text-black">
            <button className="w-full text-left py-2">Layanan Desa</button>
            <div className="bg-white rounded-md shadow-lg">
              <Link href="/berita">
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Berita Desa
                </span>
              </Link>
              <Link href="/stunting-calculator">
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Kalkulator Stunting
                </span>
              </Link>
              <Link href="/tinggi-potensi-genetik">
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Kalkulator TPG
                </span>
              </Link>
              <Link href="/peta">
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Peta Desa
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
