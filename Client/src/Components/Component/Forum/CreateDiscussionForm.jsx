import { useState } from "react";
import { useSelector } from "react-redux"; 

const CreateDiscussion = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const { user } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    const discussion = {
      title,
      content,
      image,
      username: user?.name,
      userImage: user?.imageUrl,
    };

    onCreate(discussion);
    setTitle("");
    setContent("");
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        placeholder="Discussion Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block w-full mb-2 p-2 border"
        required
      />
      <textarea
        placeholder="Discussion Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="block w-full mb-2 p-2 border"
        required
      ></textarea>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="block w-full mb-2 p-2 border"
      />
     <div className="flex justify-end">
     <button type="submit" className="bg-red-600 rounded-sm text-white  p-2">
        Create Discussion
      </button>
     </div>
    </form>
  );
};

export default CreateDiscussion;
