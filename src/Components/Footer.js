import Image from "next/image";
import Logo from "../../public/Logo.png";

const Footer = () => {
  return (
    <div className="bg-white">
      {/* Top Red Pattern */}
      <div className="w-full bg-red-600 h-8">
        <div
          className="w-full h-8"
          style={{
            backgroundImage: "url(/banner.png)",
            backgroundRepeat: "repeat",
            backgroundSize: "500px"
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center bg-gray-dark py-8 md:h-[200px] h-[150px]">
        <div className="flex items-center space-x-4">
          <Image src={Logo} alt="Logo" width={90} height={90} />
          <div className="text-center md:text-left">
            <p className="text-lg md:text-xl font-montserrat text-red-dark">
              KKN PPM UGM 2024
            </p>
            <p className="text-xl md:text-2xl font-montserrat font-bold text-red-dark">
              Kilau Karampuang
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
