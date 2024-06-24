import Image from 'next/image';
const Hero = ({heading, subheading}) => {
    return (
      <div className="flex relative items-center justify-center h-screen bg-white overflow-hidden">
        <div className="text-center z-10">
            <h2 className="text-5xl font-shadows -mb-3">
                {heading}
            </h2>
            <h1 className="text-6xl font-montserrat font-bold">
                {subheading}
            </h1>
        </div>
        <Image
            height={0}
            width={200}
            src="/Ornamen 1.png"
            alt="ornamen"
            className="absolute top-0 left-0"
        />
        <Image
            height={0}
            width={150}
            src="/Star3.png"
            alt="ornamen"
            className="absolute bot-1/2 left-1/2 transform translate-x-48"
        />
      </div>
    );
  };
  
  export default Hero;