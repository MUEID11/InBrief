const Magazine = require("../../models/Magazine/magazineModel");

const followMagazine = async (req, res) => {
  try {
    const { magazineId } = req.params;
    const { userId } = req.body;

    // const magazine = await Magazine.findById(magazineId);

    // if (!magazine) {
    //   return res.status(404).json({ message: "Magazine not found" });
    // }

    // if (!magazine.followers.includes(userId)) {
    //   magazine.followers.push(userId);
    // }

    // await magazine.save();
    // res.status(200).json({ message: "Followed the magazine" });
    const magazine = await Magazine.findByIdAndUpdate(
      magazineId,
      { $addToSet: { followers: userId } }, // Use $addToSet to avoid duplicates
      { new: true } // Return the updated magazine
    );

    if (!magazine) {
      return res.status(404).json({ error: "Magazine not found" });
    }

    res.status(200).json({ message: "Followed the magazine", magazine });
  } catch (error) {
    res.status(500).json({ message: "Error following the magazine", error });
  }
};

const unfollowMagazine = async (req, res) => {
  try {
    const { magazineId } = req.params;
    const { userId } = req.body;
    // const magazine = await Magazine.findById(magazineId);
    // if (!magazine) {
    //   return res.status(404).json({ message: "Magazine not found" });
    // }
    // if (magazine.followers.includes(userId)) {
    //   magazine.followers = magazine.followers.filter((follower) => follower !== userId);
    // }
    const magazine = await Magazine.findByIdAndUpdate(
      magazineId,
      { $pull: { followers: userId } }, // Use $pull to remove the user from followers
      { new: true } // Return the updated magazine
    );
    if (!magazine) {
      return res.status(404).json({ message: "Magazine not found" });
    }
    res.status(200).json({ message: "Unfollowed the magazine", magazine });
  } catch (error) {
    res.status(500).json({ message: "Error unfollowing the magazine", error });
  }
};

module.exports = { followMagazine, unfollowMagazine };
