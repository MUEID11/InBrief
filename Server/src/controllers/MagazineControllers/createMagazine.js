const Magazine = require("../../models/Magazine/magazineModel");

const createMagazine = async (req, res) => {
  try {
    const { title, topic, image, description, creator, articles, isPublic, followers, collaborators } = req.body;
    const magazine = new Magazine({
      title,
      topic,
      description,
      image,
      creator,
      articles,
      followers,
      collaborators,
      isPublic,
    });

    await magazine.save();
    res.status(201).json(magazine);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { createMagazine };
