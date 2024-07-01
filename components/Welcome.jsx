const Welcome = ({ title, text }) => {
  return (
    <div className="flex flex-col items-center h-[75vh] justify-center bg-[#f6f6f6] pt-[3rem]">
      <div className="flex flex-col gap-[2rem] text-center items-center ">
        <h1 className="text-[3rem]  text-gradient-blue font-[400] text-gradient">
          {title}
        </h1>
        <p className="font-[300] text-[0.9rem]">{text}</p>
      </div>
    </div>
  );
};

export default Welcome;
