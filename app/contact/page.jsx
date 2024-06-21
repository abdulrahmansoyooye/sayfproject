import Welcome from "@/components/Welcome";

const ContactUs = () => {
  return (
    <div>
      <Welcome title={"Contact us"} />
      <div className=" flex flex-col p-[12rem_0rem] gap-[5rem] items-center">
        <div className=" text-center flex items-center gap-[0.5rem] flex-col">
          <h1 className="text-[1.5rem] text-center ">
            Know more <span className="text-gradient-brown"> About </span> Sayf
          </h1>

          <p className="text-[0.8rem] font-[400]">
            Join our social media platform to get in touch with us{" "}
          </p>
        </div>
        <div>
          <a href="https://sayf.ck.page/newsletter" target="_blank">
            <button className="black_btn flex flex-col scale-[1.2] hover:scale-[1.5] font-[600]">
              <span>Join us</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
