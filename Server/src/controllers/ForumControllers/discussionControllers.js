const Discussion = require("../../models/ForumModels/Discussion");

exports.createDiscussion = async (req, res) => {
  console.log(req.body);
  try {
    const newDiscussion = new Discussion({
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
      username: req.body.username,
      userImage: req.body.userImage,
    });
    await newDiscussion.save();
    res.status(201).json(newDiscussion);
  } catch (error) {
    console.error("Error creating discussion:", error); // Log the error for debugging
    res.status(500).json({ message: "Error creating discussion", error });
  }
};

exports.getAllDiscussions = async (req, res) => {
  try {
    const { sort } = req?.query;

    let sortOption = {};
    if (sort) {
      if (sort === "asc") {
        sortOption = { createdAt: 1 };
      } else if (sort === "desc") {
        sortOption = { createdAt: -1 };
      }
    } else {
      sortOption = { createdAt: -1 };
    }

    // const discussions = await Discussion.find();
    const discussions = await Discussion.find().sort(sortOption).populate("comments");
    // console.log(discussions);
    res.status(200).json(discussions);
  } catch (error) {
    // console.error("Error fetching discussions:", error); // Log the error for debugging
    res.status(500).json({ message: "Error fetching discussions", error });
  }
};

exports.getDiscussionById = async (req, res) => {
  const id = req.params.id;
  try {
    const discussion = await Discussion.findOne({ _id: id }).populate("comments");
    console.log(discussion);
    res.status(200).json(discussion);
  } catch (error) {
    console.error("Error fetching discussion:", error); // Log the error for debugging
    res.status(500).json({ message: "Error fetching discussion", error });
  }
};
