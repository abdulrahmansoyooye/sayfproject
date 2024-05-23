"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const socials = ["whatsapp", "facebook", "telegram", "instagram"];
const Footer = () => {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="footer p-[2rem] pt-[4rem] mt-[2rem]">
      {/* Section 1 */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        whileInView={variants}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-evenly gap-[2rem] max-w-[900px] m-auto "
      >
        <div className="flex-center flex-col">
          <h2 className="text-[2rem] max-lg:text-[1.5rem] dark-text text-center">
            Join <span className="text-gradient-brown ">20k+</span> Muslims in
            our community to never miss out our daily snippets
          </h2>
        </div>
        <div className="space-y-[3rem]">
          {/* Socials */}
          <div className="flex gap-[3rem] justify-center ">
            {socials.map((icon, index) => (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                whileInView={variants}
                transition={{ duration: 0.5, delay: `0.${index}` }}
                key={`${index}-image`}
                className="bg-slate-200 p-[0.75rem] rounded-[50%] cursor-pointer transition-all duration-300 hover:bg-slate-300"
              >
                <Image
                  src={`/socials/${icon}.png`}
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
              Developed by <a href="">Soyooye</a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
