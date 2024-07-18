import { motion } from "framer-motion";
import Image from "next/image";

const socials = ["whatsapp", "telegram", "facebook"];

const ContactUs = () => {
  return (
    <div className=" text-black mt-[7rem] p-[7rem]  max-lg:p-[2rem_4rem]  flex max-lg:flex-col  gap-[5rem]">
      <div className="flex  flex-col gap-[3rem] w-[50%] max-lg:w-full">
        <div className="flex gap-[1rem] flex-col">
          <div className="text-[2.5rem] text-brown-color font-serif">
            Get Our Details
          </div>{" "}
          <div className="font-[400] text-[0.9rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem
            architecto labore dolore deserunt est, corrupti possimus sit
            praesentium nostrum saepe enim ipsa nesciunt illum! Numquam error
            consequuntur id obcaecati. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Mollitia enim doloremque alias facilis ea animi
            perspiciatis laudantium, minus et provident quos hic maiores
            consequuntur sunt illo minima harum, incidunt consectetur?
          </div>
        </div>

        <div className="flex gap-[2rem] ">
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
      <div className="flex flex-col gap-[1rem] w-[50%] max-lg:w-full border p-[1rem] rounded-lg">
        <div className="font-[400] serif">Contact Details</div>
        <div className="flex flex-col  w-full gap-[2rem]">
          <div className="flex gap-[1rem] max-lg:flex-col">
            <div className="flex gap-[1rem] font-[300]">
              {" "}
              {/* <Image
                src={`/assets/phone.png`}
                width={20}
                height={20}
                alt="whatsapp-image"
              />{" "} */}
              Phone
            </div>
            <div className="font-[300]">+234 995 149 76</div>
          </div>
          <div className="flex gap-[1rem] max-lg:flex-col">
            <div className="flex gap-[1rem] font-[300] serif">
              {" "}
              {/* <Image
                src={`/assets/email.png`}
                width={30}
                height={30}
                alt="whatsapp-image"
              />{" "} */}
              Email
            </div>
            <div className="font-[300]">sayfnetwork@email.com</div>
          </div>
          <div className="flex gap-[1rem] max-lg:flex-col">
            <div className="flex gap-[1rem] font-[300] serif">
              {" "}
              {/* <Image
                src={`/assets/address.png`}
                width={30}
                height={30}
                alt="whatsapp-image"
              />{" "} */}
              Address
            </div>
            <div className="font-[300]">Road 3, block 14 Michigan Cresent</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
