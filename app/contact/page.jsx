import { motion } from "framer-motion";
import Image from "next/image";

const socials = ["whatsapp", "telegram", "facebook"];

const ContactUs = () => {
  return (
    <div className=" text-black mt-[7rem] p-[7rem]  max-lg:p-[2rem_4rem]  flex max-lg:flex-col  gap-[5rem]">
      <div className="flex  flex-col gap-[3rem] w-[50%] max-lg:w-full">
        <div className="flex gap-[1rem] flex-col">
          <div className="text-[2.5rem] text-brown-color serif">
            Reach Out To Us
          </div>{" "}
          <div className="space-y-[0.75rem] leading-8 text-left ">
          We’d love to hear from you! At Sayf, we are dedicated to improving productivity, personal growth, and spiritual well-being within our community. 
<br />
<br />
We believe in the power of community and collaboration, and we welcome your thoughts, questions, and feedback.
<br />
<br />
Whether you have questions, feedback, or ideas to share, please don’t hesitate to reach out.

            
          </div>
        </div>
        <div className="flex  max-lg:justify-evenly  gap-[4rem]">
          {socials.map((icon, index) => (
            <div
              key={`${index}-${icon}`}
              className="bg-slate-200 p-[0.75rem] rounded-[50%] cursor-pointer transition-all duration-300 hover:bg-slate-300"
            >
              <Image
                src={`/socials/${icon}.png`}
                width={20}
                height={20}
                alt={`${icon}-image`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col  gap-[1rem] w-[50%] max-lg:w-full border p-[1rem] rounded-lg">
        <div className="font-[600] serif text-center border-b-2 pb-2">
          Contact Details
        </div>
        <div className="flex  flex-wrap w-full gap-[3rem]">
          <div className="flex gap-[1rem] w-full items-center flex-col">
            <div className="flex text-center  gap-[1rem] font-[300]">Phone</div>
            <div className="flex flex-wrap gap-[2rem]  w-full justify-center font-[300]">
              <p>+234 916 4532 355</p>
              <p>+234 814 3629 024</p>
              <p>+234 813 5316 840</p>
            </div>
          </div>
          <div className="flex items-center gap-[1rem] w-full flex-col">
            <div className="flex gap-[1rem] font-[300] serif"> Email</div>
            <div className="font-[300]">sayfnetwork@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
