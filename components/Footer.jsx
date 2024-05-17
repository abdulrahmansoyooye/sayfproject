import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer p-[2rem]">
      {/* Section 1 */}
      <div className="flex max-md:flex-col justify-evenly gap-[2rem]">
        <div className="flex-center flex-col">
          <Image
            src={"/assets/atomic-habits-dots.png"}
            width={200}
            height={200}
            alt="footer-img"
          />
          <p>Sayf Network</p>
        </div>
        Footer
      </div>
      {/* Section 2 */}
      <div></div>
    </div>
  );
};

export default Footer;
