const Magazine = require("../../models/Magazine/magazineModel");

const removeArticle = async (req, res) => {
  try {
    const { magazineId } = req.params;
    const { articleId, userId } = req.body;
    const magazine = await Magazine.findById(magazineId);

    // Check if user is the creator or a collaborator
    const isAllowed = magazine.creator.equals(userId) || magazine.collaborators.includes(userId);

    if (!isAllowed) {
      return res.status(403).json({ message: "Not authorized to remove articles from this magazine" });
    }

    if (!magazine) {
      return res.status(404).json({ message: "Magazine not found" });
    }

    // Remove the article from the magazine if it exists in the articles array
    if (magazine.articles.includes(articleId)) {
      magazine.articles.pull(articleId);
      await magazine.save();
      res.status(200).json({ message: "Article removed from magazine", magazine });
    } else {
      return res.status(400).json({ message: "Article does not exist in the magazine" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error removing article from magazine", error });
  }
};

module.exports = removeArticle;
