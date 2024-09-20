import { FaArrowRight } from "react-icons/fa";
import editorimage from "../assets/editorPick.jpg";

const EditorPicks = () => {
  return (
    <div className="p-3 container mx-auto rounded-lg">
      {/* editor's picks title */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-3xl font-inter">Editor's Pick</h2>
        <button className="text-red-600 text-lg font-semibold flex items-center gap-2">
          {" "}
          See all <FaArrowRight className="text-lg" />
        </button>
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
