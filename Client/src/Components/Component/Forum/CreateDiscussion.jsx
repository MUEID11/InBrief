import { useState } from "react";

const CreateDiscussion = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ title, content });
    setTitle("");
    setContent("");
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
      <button type="submit" className="bg-red-600 rounded-sm text-white p-2">
        Create Discussion
      </button>
    </form>
  );
};

export default CreateDiscussion;