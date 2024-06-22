import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
const ArticlesCard = ({ _id, title, content, _createdAt, index, imageUrl,tag }) => {
  const router = useRouter();
  const format = (type, createdAt) => {
    if (type == "date") {
      return `${new Date(createdAt)
        .getDate()
        .toString()
        .padStart(2, "0")}/${new Date(createdAt)
        .getMonth()
        .toString()
        .padStart(2, "0")}/${new Date(createdAt)
        .getFullYear()
        .toString()
        .padStart(2, "0")}`;
    } else {
      return `${new Date(createdAt)
        .getHours()
        .toString()
        .padStart(2, "0")}:${new Date(createdAt)
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${new Date(createdAt)
        .getSeconds()
        .toString()
        .padStart(2, "0")}`;
    }
  };
  const data = `${content.slice(0, 220)}...`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: `0.${index}` }}
      key={`${index}-image`}
      className="container flex-col gap-[4rem] cursor-pointer"
      onClick={() => router.push(`/articles/${_id}`)}
    >
      <div className="flex flex-col gap-[1rem]">
        <div className="flex flex-wrap gap-[0.75rem]">
          <h2 className="text-[1.5rem]">{title}</h2>
          <div className="flex flex-col text-[11px] bg-slate-200 p-[0.8rem] rounded-md font-[300]">
            {tag ? tag : "#tag"}
          </div>
        </div>
        <div className="flex flex-col ">
          <img
            src={imageUrl}
            className="w-full h-[250px] object-cover rounded-md "
            alt="article-img"
          />
        </div>
        <div
          className="text-[13px] text-gray-500 font-[400]"
          dangerouslySetInnerHTML={{ __html: data }}
        />{" "}
      </div>

      <div className="">
        <button className="black_btn w-full">Read Article</button>
      </div>
      <div className="flex-between text-[11px] text-slate-500">
        <div>{format("time", _createdAt)}</div>
        <div>{format("date", _createdAt)}</div>
      </div>
    </motion.div>
  );
};

export default ArticlesCard;
