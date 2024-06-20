
const Welcome = ({ title, text }) => {
  return (
    <div className="flex flex-col items-center h-[100vh] justify-center bg-[#f6f6f6] pt-[3rem]">
      <div className="flex flex-col gap-1 text-center items-center ">
        <h1 className="text-[4rem] max-lg:text-[3rem] text-gradient-blue font-[500] text-gradient">
          {title}
        </h1>
        <p className="font-[400]">{text}</p>
      </div>
    </div>
  );
};

export default Welcome;
