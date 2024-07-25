import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavItem = ({ href, label }) => {
  return <Link href={href}>{label}</Link>;
};

const NavbarAdmin = () => {
  const links = [
    { href: "/admin/berita", label: "Berita" },
    { href: "/admin/artikel", label: "Artikel" },
  ];

  return (
    <div className="fixed w-full z-50">
      <nav className="mt-6 mx-10 px-6 bg-white text-black font-montserrat bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-full flex justify-between items-center">
        <Link href="/">
          <Image src="/Logo.png" width={30} height={30} />
        </Link>
        <div className="flex space-x-8 py-2">
          {links.map((link, index) => (
            <NavItem key={index} href={link.href} label={link.label} />
          ))}
          <div className="relative group text-black">
            <Link href="/logout" className="text-white border-2 border-black bg-black rounded-large px-4">Logout</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarAdmin;
