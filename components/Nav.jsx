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
    <div className="nav flex-between sm:p-[1rem_6rem] max-lg:justify-around z-[1000] serif glassmorphism">
      <a href="/" className="flex justify-around items-center max-lg:w-[60%]">
        <Image
          src={"/assets/sayf.png"}
          width={80}
          height={50}
          alt="footer-img"
          className="cursor-pointer"
        />{" "}
        <div
          
          className=" text-[1.1rem] cursor-pointer navitem  text-center font-[400]"
        >
          Sayf Network
        </div>
      </a>

      {/* Desktop */}
      <div className="max-md:hidden flex-between gap-[2rem]">
        <Link href={"/"} className="navitem">
          Home
        </Link>
        {navLinks.map(({ name }, index) => (
          <div key={`${name}-${index}`}>
            <Link
              href={`/${name}`}
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

          <Link
            href={"/"}
            className="navitem"
            onClick={() => setIstoggle(!istoggle)}
          >
            Home
          </Link>
          {navLinks.map(({ name }, index) => (
            <div key={`${name}-${index}`}>
              <Link
                href={`/${name}`}
                className={
                  isActive(`/${name}`) ? "active" : "navitem font-[500] "
                }
                onClick={() => setIstoggle(!istoggle)}
              >
                {`${name.slice(0, 1).toUpperCase()}${name.slice(1)}`}
              </Link>
            </div>
          ))}
          <Link
            href={"/about"}
            className="navitem"
            onClick={() => setIstoggle(!istoggle)}
          >
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
