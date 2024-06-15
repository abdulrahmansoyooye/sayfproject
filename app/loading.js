import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center">
      <Image
        src={"/assets/loader.gif"}
        width={70}
        height={70}
        alt="Loading"
        unoptimized={true}
      />
    </div>
  );
};

export default Loading;
