import editorimage from "../../assets/editorPick.jpg";
import { Parallax } from "react-parallax";

const EditorPicks = () => {
  return (
    <Parallax
      blur={{ min: -10, max: 10 }}
      bgImage={editorimage}
      bgImageAlt="The Editor's Pick"
      strength={-200}
      className="my-16 rounded-sm"
      style={{ backgroundSize: "cover", backgroundPosition: "center" }} // Ensuring the image covers and is centered
    >
      <div className="bg-black/40 rounded-sm">
        <div className="container mx-auto py-24 space-y-7 text-white h-[350px] sm:h-[500px] overflow-auto ">
          <h1 className="text-lg sm:text-3xl font-bold  ">
            Editor&apos;s Picks
          </h1>
          <p className="text-sm">
            Discover the most insightful and trending articles selected by our
            editorial team. From breaking news to deep-dive features, these
            picks are curated to keep you informed, engaged, and inspired. Stay
            ahead with stories that matter, chosen just for you.
          </p>
        </div>
      </div>
    </Parallax>
  );
};

export default EditorPicks;
