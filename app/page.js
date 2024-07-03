"use client";
import Carousel from "@/components/Carousel";
import Image from "next/image";
import { motion } from "framer-motion";
import Underline from "@/components/Underline";
import InfiniteCarousel from "@/components/InfiniteCarousel";
export default function Home() {
  return (
    <main className="home">
      <Image
        src={"/assets/svg-shape.svg"}
        width={900}
        height={400}
        className="absolute mt-[7rem]"
        alt="bg-image"
      />
      {/* Carousel */}
      <div className="pt-[4rem]  bg-primary-color">
        <Carousel />
      </div>
      {/* Section2 */}
      <div className="flex flex-col bg-primary-color ">
        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="flex flex-col gap-[2rem] p-[2rem] w-full justify-center bg-[#ffff] pb-[3rem]"
        >
          <div className="flex flex-col gap-[0.5rem] items-center ">
            <div className="text-[2rem] text-center ">Our Story</div>{" "}
            <div className="flex justify-center">
              <Underline />
            </div>
          </div>

          <div className="space-y-[0.75rem] text-left max-lg:w-full w-[70%] m-auto  border-2 p-[1rem] rounded-[1rem]">
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
              fulfillment,and personal growth are embedded in the principles of
              Islam-principles that are not only incredibly effective but also
              beautifully simple.
            </p>
          </div>
        </motion.div>{" "}
        {/* Ideas */}
        <div className="flex flex-col  p-[2rem] w-full justify-center bg-[#ffffff] gap-[3rem] pb-[3rem]">
          <div className="flex justify-center">
            <Underline />
          </div>
          <div className="text-[1.8rem] text-center ">
            What Others Are Saying{" "}
            <span className="text-gradient-blue">About Our Ideas</span>
          </div>
          <InfiniteCarousel />
        </div>
        {/* offer */}
        <div className="flex flex-col flex-center gap-[2rem] w-full max-lg:p-[2rem] p-[4rem_6rem] m-[auto] border bg-primary-color z-10">
          <div className="text-[1.8rem] ">We Offer</div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="flex max-lg:flex-col gap-[2rem]"
          >
            <div className="flex flex-col gap-[1rem] bg-primary-color text-slate-50 p-[2rem] rounded-[1rem] border border-slate-300">
              <span className="text-gradient-blue font-[500]">
                Authentic Islamic Guidance
              </span>

              <p className="font-[400] dark-text">
                {" "}
                Timeless wisdom of the Quran and Sunnah, tailored to address the
                unique challenges of modern life.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="flex flex-col gap-[1rem] bg-primary-color text-slate-50 p-[2rem] rounded-[1rem] border border-slate-300"
            >
              <span className="text-gradient-blue font-[500]">
                Practical Solutions
              </span>
              <p className="font-[400]  dark-text">
                Discover actionable strategies that are easy to implement and
                resonate with your faith, leading to lasting positive change.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Section 3 */}
      {/* <div className="flex flex-col gap-[2rem] w-full section ">
        <div className="text-[2rem] text-center">
          The <span className="text-gradient-blue">Ultimate</span> Life
          Discovery <span className="text-gradient-blue">Course</span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="flex max-lg:flex-col-reverse gap-[2rem] border-2 p-[1rem] rounded-[1rem]rem]rem]"
        >
          <div className="flex flex-col justify-around max-lg:w-full w-[60%] gap-[2rem]">
            <div className="font-[400] dark-text">
              The one course that will insha Allah transform everything about
              you: your productivity, habits, relationships, cofidence,
              happiness, No technical jargon. Just recordings and lectures that
              have transformed people to become closer to their Lord, more
              fulfilled, less anxious, and Take our free productivity course to
              learn how to get rid of bad habits, get closer to your lord and
              start achieving your goals.
            </div>

            <button className="black_btn w-full">
              <a href="/courses">Learn More</a>
            </button>
          </div>{" "}
          <div className="flex-end">
            <Image
              src={"/assets/article1.jpg"}
              width={700}
              height={900}
              className="rounded-[1rem]rem]rem] max-lg:w-full"
            />
          </div>
        </motion.div>{" "}
      </div> */}
      {/* <div className="flex justify-center">
        <Underline />
      </div> */}
      {/* Section 4 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="flex flex-col gap-[3rem] p-[4rem_2rem] w-full justify-center bg-[#ffff]"
      >
        <div className="flex justify-center items-center max-lg:flex-col gap-[1rem]">
          <Image
            src={"/assets/newsletter.png"}
            width={50}
            height={50}
            alt="newsletter-img"
          />
          <div className="text-[2rem]  text-center">
            Sayf Weekly <span className="text-gradient-blue"> Newsletter</span>
          </div>{" "}
        </div>

        <div className="flex flex-col gap-[2rem] w-[60%] m-auto max-lg:w-full border-2 p-[2rem] rounded-[1rem]">
          <div className="space-y-[0.75rem]">
            <p className="dark-text font-[400] text-center">
              Every week, we will send you weapons o fight your deadliest
              enemies: procrastination, overwhelm, inconsistency, addictions,
              faulty relationships, lack of purpose, etc...
            </p>
          </div>

          <div className="black_btn sm:max-w-[50%] m-auto w-full">
            Subscribe For Free
          </div>
        </div>
      </motion.div>

      {/* Section 5 */}
      <div className="w-full section bg-primary-color">
        <div className="flex flex-col flex-center gap-[2rem] w-[60%] m-[auto] max-lg:w-full">
          <div className="space-y-[2rem]">
            <div className="text-[2rem] text-center">
              The Brutally <span className="text-gradient-blue">Honest</span>{" "}
              Podcast
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="flex flex-col gap-[3rem]  text-slate-50 p-[2rem] rounded-[1rem] border-2 "
          >
            <Image
              src={"/assets/podcast-pic.jpg"}
              width={300}
              height={200}
              className="rounded-[1rem] w-full object-cover"
              alt="podcast-img"
            />
            <div className="font-[400] dark-text text-center">
              Our weekly podcast where we share little-known tips on getting
              closer to your Lord, having better relationships, and living a
              more productive life.
            </div>

            <button className="black_btn sm:w-[60%] w-full m-auto">
              <a href="/podcasts">See latest Episodes</a>
            </button>
          </motion.div>
        </div>
      </div>
      {/* Section 6 */}

      <div className="flex flex-col gap-[2rem] p-[4rem_3rem] w-full justify-center  ">
        <div className="flex justify-center w-full  items-center flex-col pb-[1rem] gap-[2rem]">
          <div className="text-[2rem] text-center">
            Read a <span className="text-gradient-blue">popular</span> Article
          </div>
          <div className="flex justify-center">
            <Underline />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="flex max-lg:flex-col-reverse max-lg:w-full justify-between gap-[1rem] w-[80%] m-auto border-b-2 pb-[1rem]"
        >
          <div className="flex flex-col gap-[1rem] w-[50%] max-lg:w-full ">
            <p className="dark-text text-[1.5rem]">
              Authentic Islamic Guidance
            </p>

            <p className="dark-text font-[400] text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
              voluptas ipsam obcaecati, sint aliquid voluptates deleniti odit,
              laboriosam maxime esse eaque
            </p>
          </div>

          <div>
            {" "}
            <Image
              src={"/assets/article1.jpg"}
              width={400}
              height={200}
              className="rounded-[1rem] max-lg:w-full"
              alt="newsletter-img"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="flex max-lg:flex-col-reverse max-lg:w-full justify-between gap-[1rem] w-[80%] m-auto border-b-2 pb-[1rem] "
        >
          <div className="flex flex-col gap-[1rem] w-[50%] max-lg:w-full ">
            <p className="dark-text text-[1.5rem]">
              Authentic Islamic Guidance
            </p>

            <p className="dark-text font-[400] text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
              voluptas ipsam obcaecati, sint aliquid voluptates deleniti odit,
              laboriosam maxime esse eaque
            </p>
          </div>

          <div>
            {" "}
            <Image
              src={"/assets/article2.jpg"}
              width={400}
              height={200}
              className="rounded-[1rem] max-lg:w-full"
              alt="article-img"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="flex max-lg:flex-col-reverse max-lg:w-full justify-between gap-[1rem] w-[80%] m-auto border-b-2 pb-[1rem]"
        >
          <div className="flex flex-col gap-[1rem] w-[50%] max-lg:w-full ">
            <p className="dark-text text-[1.5rem]">
              Authentic Islamic Guidance
            </p>

            <p className="dark-text font-[400] text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
              voluptas ipsam obcaecati, sint aliquid voluptates deleniti odit,
              laboriosam maxime esse eaque
            </p>
          </div>

          <div>
            {" "}
            <Image
              src={"/assets/article3.jpg"}
              width={400}
              height={200}
              className="rounded-[1rem] max-lg:w-full"
              alt="article-img"
            />
          </div>
        </motion.div>
        <a
          href="/articles"
          className="serif text-center max-lg:text-left font-[400] underline cursor-pointer text-brown-color"
        >
          Read More Articles
        </a>
      </div>
    </main>
  );
}
