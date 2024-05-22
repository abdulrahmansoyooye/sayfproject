import Carousel from "@/components/Carousel";
import Underline from "@/components/Underline";
import Welcome from "@/components/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="home ">
      {/* Carousel */}
      <div className="mb-[6rem] bg-[#f9fbfd]">
        <Carousel />
      </div>
      {/* Section2 */}
      <div className="flex flex-col  bg-[#f9fbfd] mb-[6rem]">
        <div className="flex p-[6rem_4rem]  max-md:flex-col gap-[2rem] bg-[#ffffff]">
          {/* Story */}
          <div className="flex flex-col gap-[1rem] sm:w-[50%] w-full ">
            <div className="text-[3rem] max-md:text-[2rem] ">
              What is Sayf -
              <span className="text-gradient-blue"> Our Story</span>
            </div>
            <div className="space-y-[0.75rem]">
              <p className="light-text font-[400]">
                In a world overflowing with self-help books and advice from
                countless sources,many of us find ourselves seeking happiness,
                fulfillment,successful relationships,productivity, and ways to
                overcome bad habits.Yet, despite consuming all this information,
                the answers often remian elusive.
              </p>
              <p className="light-text font-[400]">
                {"     "} At Sayf, we belive there's a better way. As young
                Muslims,we relized that true contentment and success come from
                within our own rich tradition.The secrets to happiness,
                fulfillment,and personal growth are embedded in the principles
                of Islam-principles that are not only incredibly effective but
                also beautifully simple.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] items-start ">
            <Image
              src={"/assets/svg-shape.svg"}
              alt="footer-img"
              width={600}
              height={320}
            />
          </div>
        </div>{" "}
        {/* offer */}
        <div className="flex flex-col flex-center gap-[2rem] w-full sm:max-w-[70%] m-[2rem_auto] section bg-[#f9fbfd]">
          <div className="text-[3rem] max-md:text-[2rem] text-gradient-brown ">
            We Offer:
          </div>
          <div className="flex max-md:flex-col gap-[2rem]">
            <div className="flex flex-col gap-[1rem] bg-[#f9fbfd] text-slate-50 p-[2rem] rounded-[1rem] border ">
              <p className="dark-text">Authentic Islamic Guidance:</p>

              <p className="font-[400] light-text">
                {" "}
                Timeless wisdom of the Quran and Sunnah, tailored to address the
                unique challenges of modern life.
              </p>
            </div>
            <div className="flex flex-col gap-[1rem] bg-[#f9fbfd] text-slate-50 p-[2rem] rounded-[1rem] border ">
              <p className="dark-text"> Practical Solutions</p>
              <p className="font-[400]  light-text">
                Discover actionable strategies that are easy to implement and
                resonate with your faith, leading to lasting positive change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
