import moment from "moment";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import parse from "html-react-parser";

const ArticlesCard = ({
  _id,
  title,
  content,
  createdAt,
  index,
  imageUrl,
  tag,
  category,
}) => {
  const router = useRouter();
  const format = (type, createdAt) => {
    if (type == "date") {
      return moment(createdAt).format("MMMM d");
    } else {
      return moment(createdAt).format("dddd");
    }
  };
  const data = `${content.slice(0, 150)}...`;
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
          <h2 className="text-[1.5rem] ">{title}</h2>
          <div className="flex flex-col text-[11px] bg-slate-200 p-[0.8rem] rounded-[1rem] font-[300]">
            {category ? category : "#tag"}
          </div>
        </div>
        <div className="flex flex-col ">
          <img
            src={imageUrl}
            className="w-full h-[250px] object-cover rounded-[1rem] "
            alt="article-img"
          />
        </div>
        <div className="text-[0.9rem]">{parse(data)}</div>
      </div>

      <div className="">
        <button className="black_btn w-full">Read Article</button>
      </div>
      <div className="flex-between text-[11px] text-slate-500">
        <div>{format("time", createdAt)}</div>
        <div>{format("date", createdAt)}</div>
      </div>
    </motion.div>
  );
};

export default ArticlesCard;
