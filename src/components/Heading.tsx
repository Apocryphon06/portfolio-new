
const Heading = ({ title, subText }: any) => {
  return (
    <div>
      <p className="text-[#42446E] lg:text-5xl text-4xl font-bold">
        {title}
      </p>
      <p className="lg:mt-5 mt-2 text-[#666666] lg:text-3xl md:text-3xl text-2xl ">
        {" "}
        {subText}
      </p>
    </div>
  );
};

export default Heading;
