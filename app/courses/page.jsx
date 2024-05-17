import Welcome from "@/components/Welcome";

const Courses = () => {
  return (
    <div>
      <Welcome title={"Courses"} />
      <div className=" flex flex-col p-[12rem_0rem] gap-[5rem] items-center">
        <div className=" text-center flex items-center gap-[0.5rem] flex-col">
          <h1 className="text-[3rem] text-center ">
            All <span className="text-gradient-orange"> Courses </span> Here
          </h1>

          <p className="text-[1rem] font-[400]">
            Get the courses you need is a single click{" "}
          </p>
        </div>
        <div>
          <a href="https://sayf.ck.page/newsletter" target="_blank">
            <button className="black_btn flex flex-col scale-[1.2] hover:scale-[1.5]">
              <span> See All Courses</span>
              <div></div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Courses;
