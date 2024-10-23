const Magazine = require("../../models/Magazine/magazineModel");

const addArticle = async (req, res) => {
  try {
    const { magazineId } = req.params;
    const { articleId, userId } = req.body;
    const magazine = await Magazine.findById(magazineId);

    // Check if user is the creator or a collaborator
    const isAllowed = magazine.creator.equals(userId) || magazine.collaborators.includes(userId);

    if (!isAllowed) {
      return res.status(403).json({ message: "Not authorized to add articles to this magazine" });
    }

    if (!magazine) {
      return res.status(404).json({ message: "Magazine not found" });
    }

    // Add the article to the magazine if not already exists in the articles array
    if (!magazine.articles.includes(articleId)) {
      magazine.articles.push(articleId);
    } else {
      return res.status(400).json({ message: "Article already exists in the magazine" });
    }
    await magazine.save();

    res.status(200).json({ message: "Article added to magazine", magazine });
  } catch (error) {
    res.status(500).json({ message: "Error adding article to magazine", error });
  }
};

module.exports = addArticle;
