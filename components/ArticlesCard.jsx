import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const ArticlesCard = ({
  categoryId,
  _id,
  title,
  content,
  _createdAt,
  index,
}) => {
  console.log(categoryId);
  const data = `${content.slice(0, 220)} `;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: `0.${index}` }}
      key={`${index}-image`}
      className=" border-alt-color border-2 rounded-md w-[45%] max-lg:w-full transition-all duration-300"
    >
      <div className="">
        <Link href={`/articles/${_id}`} className="font-[400] cursor-pointer">
          <div className="w-full">
            <img
              src={"/assets/article3.jpg"}
              className="w-full h-[250px] object-cover rounded-md "
              alt="article-img"
            />
          </div>
          <div className="flex flex-col gap-[2rem] p-[1rem] ">
            <div
              className="text-[1.4rem] font-[500]  serif"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            <div
              className="font-[200] rubik"
              dangerouslySetInnerHTML={{ __html: data }}
            />

            <div className="flex gap-1 justify-end  hover:text-brown-color ">
              {" "}
              <p className="hover:scale-[1.2] transition-all duration-500 border border-brown-color border-1 p-[1rem] rounded-md w-full text-center">
                Continue Reading
              </p>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ArticlesCard;
