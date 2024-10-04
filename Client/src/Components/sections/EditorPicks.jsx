import editorimage from '../../assets/editorPick.jpg';
import { Parallax } from 'react-parallax';

const EditorPicks = () => {
  return (
    <Parallax
      blur={{ min: -10, max: 10 }}
      bgImage={editorimage}
      bgImageAlt="The Editor's Pick"
      strength={-200}
      className="my-16 rounded-sm"
      style={{ backgroundSize: 'cover', backgroundPosition: 'center' }} // Ensuring the image covers and is centered
    >
      <div className="bg-black/40 rounded-sm">
        <div className="container mx-auto py-24 space-y-7 text-white h-[350px] sm:h-[500px] p-2 overflow-auto ">
          <h1 className="text-lg sm:text-3xl font-bold  ">Editor&apos;s Picks</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque felis sed sem tincidunt, a faucibus elit suscipit. Integer et libero sit amet nulla luctus
            cursus. Duis et dolor sed elit vulputate ullamcorper in eu nulla. Sed vel metus ut metus dictum tristique.
          </p>
        </div>
      </div>
    </Parallax>
  );
};

export default EditorPicks;
