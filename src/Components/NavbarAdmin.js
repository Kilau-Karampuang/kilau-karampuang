import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem = ({ href, label }) => {
  return <Link href={href}>{label}</Link>;
};

const NavbarAdmin = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    router.push("/");
  };

  const links = [
    { href: "/admin/berita", label: "Berita" }
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
            <button onClick={handleLogout} className="text-white border-2 border-black bg-black rounded-large px-4">Logout</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarAdmin;
