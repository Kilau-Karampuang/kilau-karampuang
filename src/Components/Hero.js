import Image from 'next/image';
const Hero = ({heading, subheading, image="/Star3.png"}) => {
    return (
      <div className="flex relative items-center justify-center h-screen bg-white overflow-hidden">
        <div className="text-center z-10 p-4">
            <h2 className="text-4xl md:text-5xl font-shadows -mb-3">
                {subheading}
            </h2>
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold">
                {heading}
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
            width={100}
            src={image}
            alt="ornamen"
            className="absolute bot-1/2 left-1/2 translate-x-12 transform md:translate-x-48  md:scale-150"
        />
      </div>
    );
  };
  
  export default Hero;