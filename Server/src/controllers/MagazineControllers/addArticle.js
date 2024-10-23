const Magazine = require("../../models/Magazine/magazineModel");

const addArticle = async (req, res) => {
  try {
    const { magazineId } = req.params;
    const { articleId, userId } = req.body;
    const magazine = await Magazine.findById(magazineId);

    if (!magazine) {
      return res.status(404).json({ error: "Magazine not found" });
    }

    // Check if user is the creator or a collaborator
    const isAllowed = magazine.creator.equals(userId) || magazine.collaborators.includes(userId);

    if (!isAllowed) {
      return res.status(403).json({ error: "Not authorized to add articles to this magazine" });
    }

    // Add the article to the magazine
    magazine.articles.push(articleId);
    await magazine.save();

    res.status(200).json({ message: "Article added to magazine" });
  } catch (error) {
    res.status(500).json({ error: "Error adding article to magazine" });
  }
};

module.exports = addArticle;
