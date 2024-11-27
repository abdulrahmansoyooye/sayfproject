"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const socials = [{name:"whatsapp", link:"https://t.me/SayfProductiveMuslims"}, {name:"telegram", link:"https://t.me/SayfProductiveMuslims"},{name:"facebook", link:"https://m.facebook.com/p/Sayf-61555764028109/"}];
const Footer = () => {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="footer p-[2rem] pt-[4rem] ">
      {/* Section 1 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="flex flex-col justify-evenly gap-[2rem] max-w-[900px] m-auto "
      >
        <div className="flex-center flex-col">
          <h2 className="text-[2rem] max-lg:text-[1.5rem] dark-text text-center">
            Join{" "}
            <span className="text-gradient font-[500]">20k+ Muslims</span>{" "}
            in our community to never miss out on our daily snippets
          </h2>
        </div>
        <div className="space-y-[3rem]">
          {/* Socials */}
          <div className="flex gap-[3rem] justify-center ">
            {socials.map(({name,link}, index) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: `0.${index}` }}
                key={`${index}-image`}

                className="bg-slate-200 p-[0.75rem] rounded-[50%] cursor-pointer transition-all duration-300 hover:bg-slate-300"
              >
                <a></a>
                <Image
                  src={`/socials/${name}.png`}
                  width={20}
                  height={20}
                  alt="whatsapp-image"
                />
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center light-text text-[12px] gap-[0.5rem] ">
            <p className="font-[400]">© 2024 Sayf Network</p>|
            <p className="font-[400]">
              Developed by{" "}
              <Link
                href="https://abdulrahmansoyooye.online/"
                target="_blank"
              >
                Soyooye
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
