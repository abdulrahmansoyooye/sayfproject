import Underline from "./Underline";

const Welcome = ({ title, text }) => {
  return (
    <div className="flex flex-col items-center h-[80vh] justify-center bg-[#f6f6f6] bg-no-repeat bg-cover">
      <div className="flex flex-col gap-1 text-center items-center">
        <h1 className="text-[6rem] max-md:text-[4rem] text-gradient-blue">
          {title}
        </h1>
        <p className="text-gradient">{text}</p>
      </div>
      <Underline />
    </div>
  );
};

export default Welcome;
