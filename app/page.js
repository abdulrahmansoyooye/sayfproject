import Carousel from "@/components/Carousel";
import Underline from "@/components/Underline";
import Welcome from "@/components/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="home">
      <Image
        src={"/assets/svg-shape.svg"}
        width={900}
        height={400}
        className="absolute mt-[7rem]"
      />
      {/* Carousel */}
      <div className="pt-[4rem]  bg-primary-color">
        <Carousel />
      </div>
      {/* Section2 */}
      <div className="flex flex-col bg-primary-color mb-[4rem]">
        {/* Story */}
        <div className="flex flex-col gap-[1rem] p-[4rem_2rem] w-full justify-center bg-[#ffffff] ">
          <div className="flex justify-start sm:w-[70%] m-auto  items-center max-lg:flex-col">
            <Image src={"/assets/sayf.png"} width={160} height={160} />
            <div className="text-[3rem] max-lg:text-[2rem] text-center">
              What is Sayf -
              <span className="text-gradient-blue"> Our Story</span>
            </div>{" "}
          </div>

          <div className="flex sm:max-w-[70%]  m-auto max-lg:flex-col gap-[2rem]">
            <div className="space-y-[0.75rem] text-center">
              <p className="dark-text font-[400]">
                In a world overflowing with self-help books and advice from
                countless sources,many of us find ourselves seeking happiness,
                fulfillment,successful relationships,productivity, and ways to
                overcome bad habits.Yet, despite consuming all this information,
                the answers often remian elusive.
              </p>
              <p className="dark-text font-[400]">
                {"     "} At Sayf, we belive there's a better way. As young
                Muslims,we relized that true contentment and success come from
                within our own rich tradition.The secrets to happiness,
                fulfillment,and personal growth are embedded in the principles
                of Islam-principles that are not only incredibly effective but
                also beautifully simple.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* offer */}
        <div className="flex flex-col flex-center gap-[2rem] w-full sm:max-w-[70%] m-[1rem_auto] section bg-primary-color z-10">
          {/* <Image
            src={"/assets/svg-shape1.svg"}
            width={900}
            height={400}
            className="absolute -z-10"
          /> */}
          <div className="text-[3rem] max-lg:text-[2rem] text-gradient-blue ">
            We Offer:
          </div>
          <div className="flex max-lg:flex-col gap-[2rem]">
            <div className="flex flex-col gap-[1rem] bg-primary-color text-slate-50 p-[2rem] rounded-[1rem] border border-slate-300">
              <p className="dark-text">Authentic Islamic Guidance</p>

              <p className="font-[400] dark-text">
                {" "}
                Timeless wisdom of the Quran and Sunnah, tailored to address the
                unique challenges of modern life.
              </p>
            </div>
            <div className="flex flex-col gap-[1rem] bg-primary-color text-slate-50 p-[2rem] rounded-[1rem] border border-slate-300">
              <p className="dark-text"> Practical Solutions</p>
              <p className="font-[400]  dark-text">
                Discover actionable strategies that are easy to implement and
                resonate with your faith, leading to lasting positive change.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex max-lg:flex-col flex- gap-[2rem] w-full section ">
        <div className="space-y-[2rem] sm:w-[50%]">
          <div className="text-[3rem] max-lg:text-[2rem] text-left max-lg:text-center">
            The <span className="text-gradient-blue">Ultimate</span> Life
            Discovery <span className="text-gradient-blue">Course</span>
          </div>
          <div className="flex flex-col gap-[1rem]  ">
            <div className="font-[400] dark-text">
              The one course that will insha Allah transform everything about
              you: your productivity, habits, relationships, cofidence,
              happiness, No technical jargon. Just recordings and lectures that
              have transformed people to become closer to their Lord, more
              fulfilled, less anxious, and Take our free productivity course to
              learn how to get rid of bad habits, get closer to your lord and
              start achieving your goals.
            </div>

            <button className="black_btn sm:w-[60%] w-full">Learn More</button>
          </div>{" "}
        </div>
        <div>
          <Image
            src={"/assets/article1.jpg"}
            width={600}
            height={700}
            className="rounded-[1rem] max-lg:w-full"
          />
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col gap-[3rem] p-[4rem_2rem] w-full justify-center bg-[#ffff] border-t-[2px] border-b-[2px]">
        <div className="flex sm:w-[70%] m-auto justify-center  items-center max-lg:flex-col gap-[1rem]">
          <Image src={"/assets/newsletter.png"} width={100} height={100} />
          <div className="text-[3rem] max-lg:text-[2rem] text-center">
            Sayf Weekly <span className="text-gradient-blue"> Newsletter</span>
          </div>{" "}
        </div>

        <div className="flex sm:max-w-[50%]  m-auto flex-col gap-[2rem]">
          <div className="space-y-[0.75rem]">
            <p className="dark-text font-[400] text-center">
              Every week, we will send you weapons o fight your deadliest
              enemies: procrastination, overwhelm, inconsistency, addictions,
              faulty relationships, lack of purpose, etc...
            </p>
          </div>
          <button className="black_btn w-[60%] m-auto">
            Subscribe For Free
          </button>
        </div>
      </div>

      {/* Section 5 */}

      <div className="flex flex-col gap-[3rem] p-[4rem_2rem] w-full justify-center bg-primary-color ">
        {/* <Image
          src={"/assets/svg-shape1.svg"}
          width={900}
          height={400}
          className="absolute "
        /> */}
        <div className="flex justify-center sm:w-[80%] m-auto  items-center max-lg:flex-col max-lg:w-[100%] border-b-2 pb-[1rem]">
          <div className="text-[3rem] max-lg:text-[2rem] text-center">
            Read a <span className="text-gradient-blue">popular</span> Article
          </div>
        </div>
        <div className="flex max-lg:flex-col-reverse  gap-[1rem] justify-between sm:w-[80%] m-auto border-b-2 pb-[1rem] max-lg:w-[100%]">
          <div className="flex flex-col gap-[1rem]  sm:w-[50%]">
            <p className="dark-text text-[1.5rem]">
              Authentic Islamic Guidance
            </p>

            <p className="dark-text font-[400] text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
              voluptas ipsam obcaecati, sint aliquid voluptates deleniti odit,
              laboriosam maxime esse eaque reprehenderit illum odio neque
              accusamus quo veritatis expedita. Nihil possimus at, optio
              repudiandae tempora totam fuga nisi corporis! Cumque velit at
              soluta doloribus quidem consectetur, ea accusantium esse nihil
              quod similique fugit, cum, laborum harum excepturi expedita ab.
            </p>
          </div>

          <div>
            {" "}
            <Image
              src={"/assets/article1.jpg"}
              width={400}
              height={200}
              className="rounded-[1rem] max-lg:w-full"
            />
          </div>
        </div>
        <div className="flex max-lg:flex-col-reverse  gap-[1rem] justify-between sm:w-[80%] m-auto border-b-2 pb-[1rem]">
          <div className="flex flex-col gap-[0.5rem]  sm:w-[50%]">
            <p className="dark-text text-[1.5rem]">
              Authentic Islamic Guidance
            </p>

            <p className="dark-text font-[400] text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
              voluptas ipsam obcaecati, sint aliquid voluptates deleniti odit,
              laboriosam maxime esse eaque reprehenderit illum odio neque
              accusamus quo veritatis expedita. Nihil possimus at, optio
              repudiandae tempora totam fuga nisi corporis! Cumque velit at
              soluta doloribus quidem consectetur, ea accusantium esse nihil
              quod similique fugit, cum, laborum harum excepturi expedita ab.
            </p>
          </div>

          <div>
            {" "}
            <Image
              src={"/assets/article2.jpg"}
              width={400}
              height={200}
              className="rounded-[1rem] max-lg:w-full object-cover"
            />
          </div>
        </div>
        <div className="flex max-lg:flex-col-reverse  gap-[1rem] justify-between sm:w-[80%] m-auto border-b-2 pb-[1rem]">
          <div className="flex flex-col gap-[0.5rem]  sm:w-[50%]">
            <p className="dark-text text-[1.5rem]">
              Authentic Islamic Guidance
            </p>

            <p className="dark-text font-[400] text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
              voluptas ipsam obcaecati, sint aliquid voluptates deleniti odit,
              laboriosam maxime esse eaque reprehenderit illum odio neque
              accusamus quo veritatis expedita. Nihil possimus at, optio
              repudiandae tempora totam fuga nisi corporis! Cumque velit at
              soluta doloribus quidem consectetur, ea accusantium esse nihil
              quod similique fugit, cum, laborum harum excepturi expedita ab.
            </p>
          </div>

          <div>
            {" "}
            <Image
              src={"/assets/article3.jpg"}
              width={400}
              height={200}
              className="rounded-[1rem] max-lg:w-full  max-lg:h-[200px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="flex flex-col flex-center gap-[2rem] w-full sm:max-w-[70%] m-[1rem_auto] section ">
        <div className="space-y-[2rem]">
          <div className="text-[3rem] max-lg:text-[2rem] text-center">
            The Brutally <span className="text-gradient-blue">Honest</span>{" "}
            Podcast
          </div>
        </div>

        <div className="flex flex-col gap-[3rem]  text-slate-50 p-[2rem] rounded-[1rem] border ">
          <Image
            src={"/assets/podcast-pic.jpg"}
            width={300}
            height={200}
            className="rounded-[1rem] w-full object-cover"
          />
          <div className="font-[400] dark-text text-center">
            Our weekly podcast where we share little-known tips on getting
            closer to your Lord, having better relationships, and living a more
            productive life.
          </div>

          <button className="black_btn sm:w-[60%] w-full m-auto">
            See latest Episodes
          </button>
        </div>
      </div>
    </main>
  );
}
