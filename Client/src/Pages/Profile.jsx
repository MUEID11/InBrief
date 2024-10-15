import { useSelector } from "react-redux";
import { useState } from "react";
import { TbBookmark, TbEdit, TbPlus } from "react-icons/tb";

const Profile = () => {
  const { user } = useSelector((state) => state.user);

  const [isEditing, setIsEditing] = useState({
    education: false,
    about: false,
    skills: false,
  });

  const [formData, setFormData] = useState({
    education: [
      { institution: "Example University", degree: "Bachelor's in CS", year: "2020" },
    ],
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

  return (
    <div className="container mx-auto sm:my-12 my-2 max-w-6xl">
      <div className="grid grid-cols-4 gap-8 sm:min-h-80 ">
        {/* Profile Image Card */}
        <div className="col-span-1 ">
          <img
            src={user?.imageUrl}
            className="w-48 h-48 lg:w-64 lg:h-64  object-cover mx-auto rounded-full"
            alt="User"
          />
        </div>

        {/* User Info Card */}
        <div className="col-span-2 p-6 shadow-md rounded-sm bg-white space-y-5">
          <h5 className="text-lg font-semibold flex items-center">
            User Name: {user?.name}
            <TbEdit className="ml-4 text-blue-500 cursor-pointer" />
          </h5>
          <h5 className="text-lg font-semibold">User Email: {user?.email}</h5>
          <h5 className="text-lg font-semibold">
            User Id: {user?._id.slice(0, 6)}
          </h5>
        </div>

        {/* Bookmarks Card */}
        <div className="col-span-1 p-6 shadow-md rounded-sm bg-white">
          <h5 className="flex items-center text-xl font-semibold text-blue-500">
            <TbBookmark className="mr-2" /> Bookmarks
            <span className="bg-blue-100 py-1 px-2 rounded-full ml-2">0</span>
          </h5>
        </div>
      </div>

      <hr className="my-6" />

      {/* Editable Sections Below the HR */}
      <div className="grid grid-cols-3 gap-8">
        {/* Education Section */}
        <div className="p-6 shadow-md rounded-sm bg-white">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-semibold">Education & Qualifications</h4>
            <TbEdit
              className="text-blue-500 cursor-pointer"
              onClick={() => handleToggleEdit("education")}
            />
          </div>
          {isEditing.education ? (
            formData.education.map((edu, index) => (
              <div key={index} className="space-y-2 mb-4">
                <input
                  type="text"
                  placeholder="Institution"
                  value={edu.institution}
                  onChange={(e) =>
                    handleChange("education", index, "institution", e.target.value)
                  }
                  className="w-full border rounded-sm p-2"
                />
                <input
                  type="text"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) =>
                    handleChange("education", index, "degree", e.target.value)
                  }
                  className="w-full border rounded-sm p-2"
                />
                <input
                  type="text"
                  placeholder="Year"
                  value={edu.year}
                  onChange={(e) =>
                    handleChange("education", index, "year", e.target.value)
                  }
                  className="w-full border rounded-sm p-2"
                />
              </div>
            ))
          ) : (
            formData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <p className="text-lg font-medium">{edu.institution}</p>
                <p>{edu.degree} - {edu.year}</p>
              </div>
            ))
          )}
        </div>

        {/* About Section */}
        <div className="p-6 shadow-md rounded-sm bg-white">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold">About</h4>
            <TbEdit
              className="text-blue-500 cursor-pointer"
              onClick={() => handleToggleEdit("about")}
            />
          </div>
          {isEditing.about ? (
            formData.about.map((item, index) => (
              <div key={index} className="space-y-2 mb-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={item.title}
                  onChange={(e) =>
                    handleChange("about", index, "title", e.target.value)
                  }
                  className="w-full border rounded-sm p-2"
                />
                <input
                  type="text"
                  placeholder="Value"
                  value={item.value}
                  onChange={(e) =>
                    handleChange("about", index, "value", e.target.value)
                  }
                  className="w-full border rounded-sm p-2"
                />
              </div>
            ))
          ) : (
            formData.about.map((item, index) => (
              <div key={index} className="mb-4">
                <p className="text-lg font-medium">{item.title}</p>
                <p>{item.value}</p>
              </div>
            ))
          )}
        </div>

        {/* Skills Section */}
        <div className="p-6 shadow-md rounded-sm bg-white">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold">Skills</h4>
            <TbEdit
              className="text-blue-500 cursor-pointer"
              onClick={() => handleToggleEdit("skills")}
            />
          </div>
          {isEditing.skills ? (
            formData.skills.map((skill, index) => (
              <div key={index} className="space-y-2 mb-4">
                <input
                  type="text"
                  placeholder="Category"
                  value={skill.category}
                  onChange={(e) =>
                    handleChange("skills", index, "category", e.target.value)
                  }
                  className="w-full border rounded-sm p-2"
                />
                <input
                  type="text"
                  placeholder="Items (comma-separated)"
                  value={skill.items.join(", ")}
                  onChange={(e) =>
                    handleChange(
                      "skills",
                      index,
                      "items",
                      e.target.value.split(", ")
                    )
                  }
                  className="w-full border rounded-sm p-2"
                />
              </div>
            ))
          ) : (
            formData.skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <p className="text-lg font-medium">{skill.category}</p>
                <p>{skill.items.join(", ")}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;