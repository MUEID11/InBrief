import { FaArrowRight } from "react-icons/fa";
import editorimage from "../../assets/editorPick.jpg";
import { Link } from "react-router-dom";

const EditorPicks = () => {
  return (
    <div className=" container mx-auto rounded-lg mt-4 sm:mt-14">
      {/* editor's picks title */}
      <div className="flex justify-between items-center my-4">
        <h2 className="font-bold sm:text-3xl text-2xl font-inter">
          Editor's Pick
        </h2>
        <Link
          to={"/editorpick"}
          className="flex items-center gap-1 font-bold text-red-500 hover:text-red-700 transition-colors duration-300"
        >
          See All <FaArrowRight />
        </Link>
      </div>

      {/* editor picks banner  */}
      <div className=" my-6 min-h-80 rounded-lg bg-gray-800 shadow-xl relative ">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-40 rounded-lg"
          src={editorimage}
          alt="news image"
        />
        <div className="relative p-10 pt-32  ">
          <div className="flex gap-2 text-[16px] text-white opacity-50">
            <p>MacRumors :</p>
            <p>5 hours ago</p>
          </div>
          <h2 className="text-2xl font-serif font-semibold text-white">
            All the rumors about the iphone 15,exprected in 2023
          </h2>
          <p className="text-white text-[16px] mt-2">
            Apple in september 2022 realeased the iphone 14 and iphone 14 pro
            models,but we,ve been hearing rumors about the iphone 15 since well
            before the latest iphones became available for purches
          </p>
          <div className="flex gap-2 text-[16px] text-white opacity-50">
            <p>Technology :</p>
            <p>10 min read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPicks;
