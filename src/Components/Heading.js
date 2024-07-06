const Heading = ({heading, subheading}) => {
    return (<>
        <h1 className="text-2xl text-center font-montserrat">{heading}</h1>
        <h2 className="text-lg text-center font-montserrat">{subheading}</h2>
    </>)
}
export default Heading;
