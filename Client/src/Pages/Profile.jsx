import { useSelector } from "react-redux";
import { useState } from "react";
import { TbBookmark, TbEdit, TbPlus } from "react-icons/tb";
import { useGetBookmarksQuery } from "../services/bookmarksApi";
import { IoBookmarksSharp } from "react-icons/io5";
import { useEffect } from "react";
import axios from "axios";
import { GoTrash } from "react-icons/go";
import DltConfirmationModal from "../Components/Component/DltConfirmationModal";
import { toast } from "react-hot-toast";
import { FaRegSquarePlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const { data, isLoading, isError } = useGetBookmarksQuery(user?.email);
  const bookmarks = data?.data;
  const [magazines, setMagazines] = useState([]);
  const [isDltMagazineModalOpen, setIsDltMagazineModalOpen] = useState(false);
  const [isCreateMagazineModalOpen, setIsCreateMagazineModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  console.log("bookmarksRTK=>", bookmarks);
  const [isEditing, setIsEditing] = useState({
    education: false,
    about: false,
    skills: false,
  });

  const [formData, setFormData] = useState({
    education: [{ institution: "Example University", degree: "Bachelor's in CS", year: "2020" }],
    about: [
      { title: "Birthday", value: "1995-01-01" },
      { title: "Contact", value: "+123456789" },
      { title: "Address", value: "123, Street, City" },
    ],
    skills: [
      { category: "Programming Languages", items: ["JavaScript", "Python"] },
      { category: "Frameworks", items: ["React", "Express"] },
    ],
  });
  console.log(formData);
  const handleToggleEdit = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (field, index, key, value) => {
    const updatedField = [...formData[field]];
    updatedField[index][key] = value;
    setFormData((prev) => ({ ...prev, [field]: updatedField }));
  };

  const handleAddField = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], { title: "", value: "" }],
    }));
  };

  // magazines
  const getMagazines = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/magazines?creatorId=${user?._id}`);
      setMagazines(response.data);
    } catch (error) {
      console.error("Error fetching magazines:", error);
    }
  };
  useEffect(() => {
    getMagazines();
  }, []);

  const dltMagazineHandler = async (id) => {
    try {
      const res = await axios.delete(`${import.meta.env.VITE_API_URL}/magazines/${id}`);
      console.log(res);
      if (res.status !== 200) {
        throw new Error("Failed to delete magazine!");
      }
      toast.success("Deleted magazine successfully!");
      getMagazines();
      setIsDltMagazineModalOpen(false);
    } catch (error) {
      toast.error("Failed to delete magazine!");
      console.log(error);
    }
  };

  const handleCreateMagazine = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const visibility = formData.get("visibility");
    const isPublic = visibility === "public";

    const magazineImage = formData.get("image");

    const image = new FormData();
    image.append("file", magazineImage);
    image.append("upload_preset", "a4roznw9");

    try {
      const cloudinaryResponse = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: image,
      });

      const imageData = await cloudinaryResponse.json();
      console.log(imageData);

      if (!imageData.secure_url) {
        throw new Error("Image upload failed");
      }

      const magazineData = {
        title: formData.get("title"),
        topic: formData.get("topic"),
        description: formData.get("description"),
        isPublic,
        image: imageData.secure_url,
        creator: user._id,
      };

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/magazines`, magazineData);

      if (response.status === 201) {
        setIsCreateMagazineModalOpen(false);
        toast("Magazine Created!", {
          icon: "✔️",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        console.log("Magazine created successfully:", response.data);
      } else {
        setLoading(false);
        throw new Error("Magazine creation failed");
      }
      setLoading(false);
      navigate("/my-magazines");
    } catch (error) {
      setLoading(false);
      console.error("Error creating magazine:", error);
      toast("Something went wrong", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <div className="container mx-auto sm:my-12 my-2 max-w-6xl">
      <div className="grid grid-cols-4 gap-8 sm:min-h-80 ">
        {/* Profile Image Card */}
        <div className="col-span-1 ">
          <img src={user?.imageUrl || user?.photoURL} referrerPolicy="no-referer" className="w-48 h-48 lg:w-64 lg:h-64  object-cover mx-auto rounded-full" alt="User" />
        </div>

        {/* User Info Card */}
        <div className="col-span-2 p-6 shadow-md rounded-sm bg-white space-y-5">
          <h5 className="font-semibold flex items-center text-neutral-900">
            <span className="text-neutral-700 mr-1">User Name: </span> {user?.name || user?.displayName}
            <TbEdit className="ml-4 text-blue-500 cursor-pointer" />
          </h5>
          <h5 className="font-semibold text-neutral-900">
            <span className="text-neutral-700">User Email:</span> {user?.email}
          </h5>
          <h5 className="font-semibold text-neutral-900">
            <span className="text-neutral-700">User Id:</span> {user?._id?.slice(0, 6) || user?.uid}
          </h5>
        </div>

        {/* Bookmarks Card */}
        <div className="col-span-1 p-6 shadow-md rounded-sm bg-white">
          <h5 className="flex items-center text-xl font-semibold text-red-800 ">
            <IoBookmarksSharp className="mr-2" /> Bookmarks
            <span className="bg-blue-100 py-1 px-2 rounded-full ml-auto text-sm">{bookmarks?.length}</span>
          </h5>
          {bookmarks?.length === 0 && <div className="text-sm mt-4">Never lost the news you wanted to read. Add them to Bookmarks</div>}
          {bookmarks?.length > 0 &&
            bookmarks.map((bookmark) => (
              <div className="mt-2 flex items-center justify-between" key={bookmark._id}>
                <ul>
                  <li className="space-y-2 text-sm">
                    <a className="hover:text-blue-500 hover:underline" target="_blank" href={bookmark?.url}>
                      {bookmark?.title.slice(0, 20)}...
                    </a>
                  </li>
                </ul>{" "}
                <img className="w-8" src={bookmark?.image} />
              </div>
            ))}
        </div>
        {isLoading && (
          <div className="col-span-1 p-6 shadow-md rounded-sm bg-white">
            <h5 className="flex items-center text-xl font-semibold text-blue-500">
              <TbBookmark className="mr-2" /> Loading....
            </h5>
          </div>
        )}
      </div>

      <hr className="my-6" />

      {/* Editable Sections Below the HR */}
      <div className="grid grid-cols-3 gap-8">
        {/* Education Section */}
        {/* <div className="p-6 shadow-md rounded-sm bg-white">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-semibold">Education & Qualifications</h4>
            <TbEdit className="text-blue-500 cursor-pointer" onClick={() => handleToggleEdit("education")} />
          </div>
          {isEditing.education
            ? formData.education.map((edu, index) => (
                <div key={index} className="space-y-2 mb-4">
                  <input
                    type="text"
                    placeholder="Institution"
                    value={edu.institution}
                    onChange={(e) => handleChange("education", index, "institution", e.target.value)}
                    className="w-full border rounded-sm p-2"
                  />
                  <input
                    type="text"
                    placeholder="Degree"
                    value={edu.degree}
                    onChange={(e) => handleChange("education", index, "degree", e.target.value)}
                    className="w-full border rounded-sm p-2"
                  />
                  <input
                    type="text"
                    placeholder="Year"
                    value={edu.year}
                    onChange={(e) => handleChange("education", index, "year", e.target.value)}
                    className="w-full border rounded-sm p-2"
                  />
                </div>
              ))
            : formData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <p className="text-lg font-medium">{edu.institution}</p>
                  <p>
                    {edu.degree} - {edu.year}
                  </p>
                </div>
              ))}
        </div> */}

        <div className="p-6 shadow-md rounded-sm bg-white">
          <div className="flex justify-between items-center pr-1">
            <h1 className="text-xl font-semibold text-red-800">Your Magazines</h1>
            <FaRegSquarePlus className="text-blue-500 cursor-pointer " onClick={() => setIsCreateMagazineModalOpen(true)} />

            <div
              className={`fixed ${
                isCreateMagazineModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              } transition-all duration-300 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 pt-24 p-6`}
              onClick={() => setIsCreateMagazineModalOpen(false)}>
              <div className="bg-white p-6 rounded-lg w-96" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-lg font-semibold mb-2 ">Create Playlist</h2>
                <form onSubmit={handleCreateMagazine}>
                  <div className="mb-2">
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input type="text" name="title" className="w-full border p-1 rounded" placeholder="Enter magazine title" required />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium mb-1">Topic</label>
                    <input type="text" name="topic" placeholder="Enter magazine topic" className="w-full border p-1 rounded" required />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea name="description" placeholder="Enter magazine description" className="w-full border p-1 rounded" rows="2" required></textarea>
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium mb-1">Visibility</label>
                    <select name="visibility" className="w-full border p-2 rounded" required>
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium mb-1">Image</label>
                    <input type="file" name="image" accept="image/*" className="w-full border p-1 rounded" required />
                  </div>
                  <button disabled={loading} type="submit" className={`${loading ? "bg-gray-400" : "bg-blue-500"} text-white px-4 py-2 rounded`}>
                    {loading ? "Creating..." : "Create"}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div>
            {magazines?.length > 0 ? (
              magazines?.map((m) => (
                <div key={m._id} className="mt-4 border-b flex justify-between items-center pr-1">
                  <p className="text-neutral-800 font-medium"> {m.title} </p>
                  <GoTrash onClick={() => setIsDltMagazineModalOpen(true)} className="text-red-500 cursor-pointer" />

                  <DltConfirmationModal
                    setIsModalOpen={setIsDltMagazineModalOpen}
                    title={`Delete ${m.title}`}
                    subtitle={"Are you sure you want to delete this magazine?"}
                    onDltHandler={dltMagazineHandler}
                    id={m._id}
                    isModalOpen={isDltMagazineModalOpen}
                  />
                </div>
              ))
            ) : (
              <p className="text-sm font-semibold text-neutral-500 mt-4">No magazine found!</p>
            )}
          </div>
        </div>

        {/* About Section */}
        <div className="p-6 shadow-md rounded-sm bg-white">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold text-red-800">User Information</h4>
            <TbEdit className="text-blue-500 cursor-pointer" onClick={() => handleToggleEdit("about")} />
          </div>
          {isEditing.about
            ? formData.about.map((item, index) => (
                <div key={index} className="space-y-2 mb-4">
                  <input
                    type="text"
                    placeholder="Title"
                    value={item.title}
                    onChange={(e) => handleChange("about", index, "title", e.target.value)}
                    className="w-full border rounded-sm p-2"
                  />
                  <input
                    type="text"
                    placeholder="Value"
                    value={item.value}
                    onChange={(e) => handleChange("about", index, "value", e.target.value)}
                    className="w-full border rounded-sm p-2"
                  />
                </div>
              ))
            : formData.about.map((item, index) => (
                <div key={index} className="mb-4">
                  <p className="text-lg font-medium text-neutral-800">{item.title}</p>
                  <p className="text-neutral-700">{item.value}</p>
                </div>
              ))}
        </div>

        {/* Skills Section */}
        <div className="p-6 shadow-md rounded-sm bg-white">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold text-red-800">Interest Area</h4>
            <TbEdit className="text-blue-500 cursor-pointer" onClick={() => handleToggleEdit("skills")} />
          </div>
          {isEditing.skills
            ? formData.skills.map((skill, index) => (
                <div key={index} className="space-y-2 mb-4">
                  <input
                    type="text"
                    placeholder="Category"
                    value={skill.category}
                    onChange={(e) => handleChange("skills", index, "category", e.target.value)}
                    className="w-full border rounded-sm p-2"
                  />
                  <input
                    type="text"
                    placeholder="Items (comma-separated)"
                    value={skill.items.join(", ")}
                    onChange={(e) => handleChange("skills", index, "items", e.target.value.split(", "))}
                    className="w-full border rounded-sm p-2"
                  />
                </div>
              ))
            : formData.skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <p className="text-lg font-medium text-neutral-800">{skill.category}</p>
                  <p className="text-neutral-700">{skill.items.join(", ")}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
