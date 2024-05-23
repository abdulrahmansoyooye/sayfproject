"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
const navLinks = [
  {
    name: "books",
  },
  {
    name: "articles",
  },
  {
    name: "podcasts",
  },
  {
    name: "courses",
  },
  {
    name: "newsletter",
  },
];
const Nav = () => {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;
  const [istoggle, setIstoggle] = useState(false);
  return (
    <div className="nav p-[1rem_2rem_1rem] sm:p-[2rem_6rem_2rem] flex-between z-[1000] ">
      <div className="flex justify-center items-center">
        <Image
          src={"/assets/sayf.png"}
          width={60}
          height={50}
          alt="footer-img"
          className="cursor-pointer"
        />{" "}
        <Link
          href={"/"}
          className="font-[500] text-[1.2rem] cursor-pointer navitem"
        >
          Sayf Network
        </Link>
      </div>

      {/* Desktop */}
      <div className="max-md:hidden flex-between gap-[2rem]">
        {navLinks.map(({ name }, index) => (
          <div key={`${name}-${index}`}>
            <Link
              href={`${name}`}
              className={isActive(`/${name}`) ? "active" : "navitem font-[400]"}
            >
              {`${name.slice(0, 1).toUpperCase()}${name.slice(1)}`}
            </Link>
          </div>
        ))}
      </div>
      {/* Mobile */}
      {istoggle && (
        <motion.div
          className={` mobileNav transition-all ease-in-out duration-200`}
          animate={{ x: -100 }}
          transition={{
            ease: "linear",
            x: { duration: 0 },
          }}
        >
          <div
            className="cursor-pointer md:hidden close-img"
            onClick={() => setIstoggle(!istoggle)}
          >
            <Image
              src={"/assets/close.png"}
              width={20}
              height={30}
              alt="close-img"
            />
          </div>
          {navLinks.map(({ name }, index) => (
            <div key={`${name}-${index}`}>
              <Link
                href={`${name}`}
                className={
                  isActive(`/${name}`) ? "active" : "navitem font-[500] "
                }
                onClick={() => setIstoggle(!istoggle)}
              >
                {`${name.slice(0, 1).toUpperCase()}${name.slice(1)}`}
              </Link>
            </div>
          ))}
          <Link href={"/about"} className="navitem">
            About
          </Link>
        </motion.div>
      )}
      <Link href={"/about"} className="navitem max-lg:hidden">
        About
      </Link>
      <div
        className="cursor-pointer md:hidden"
        onClick={() => setIstoggle(!istoggle)}
      >
        <Image
          src={"/assets/menu.png"}
          width={20}
          height={30}
          alt="footer-img"
        />
      </div>
    </div>
  );
};

export default Nav;
