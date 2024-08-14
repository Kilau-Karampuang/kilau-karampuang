const Heading = ({ heading, subheading, className = "" }) => {
  return (
    <div className={className}>
      <h1 className="text-2xl text-center font-montserrat">{heading}</h1>
      <h2 className="hidden sm:block text-lg text-center font-montserrat mx-2">{subheading}</h2>
    </div>
  );
};

export default Heading;
