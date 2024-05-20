import { FaBeer } from "react-icons";
import Image from "next/image";
const socials = ["whatsapp", "facebook", "telegram", "instagram"];
const Footer = () => {
  return (
    <div className="footer p-[1rem] max-w-[900px] m-auto pt-[4rem]">
      {/* Section 1 */}
      <div className="flex flex-col justify-evenly gap-[2rem]">
        <div className="flex-center flex-col">
          <h2 className="text-[2.5rem] dark-text text-center">
            Join <span className="text-gradient-orange">20k+</span> Muslims in
            our community to never miss out our daily snippets
          </h2>
        </div>
        <div className="space-y-[3rem]">
          {/* Socials */}
          <div className="flex gap-[3rem] justify-center ">
            {socials.map((icon, index) => (
              <div
                key={`${index}-image`}
                className="bg-slate-200 p-[0.75rem] rounded-[50%] cursor-pointer transition-all duration-300 hover:bg-slate-300"
              >
                <Image
                  src={`/socials/${icon}.png`}
                  width={20}
                  height={20}
                  alt="whatsapp-image"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center light-text text-[12px] gap-[0.5rem]">
            <p>© 2024 Sayf Network</p>|
            <p>
              Developed by <a href="">Soyooye</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
