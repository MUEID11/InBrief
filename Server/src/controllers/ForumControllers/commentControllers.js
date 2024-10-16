exports.addComment = async (req, res) => {
    try {
        console.log("Request Body:", req.body);
        console.log("Discussion ID:", req.params.id);

        const { content, username, userImage } = req.body;

        if (!content || !username || !userImage) {
            return res.status(400).json({ message: "Content, username, and userImage are required." });
        }

        const newComment = new Comment({
            discussionId: req.params.id,
            content,
            username,
            userImage,
        });

        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        console.error("Error adding comment:", error);
        res.status(500).json({ message: "Server error", error });
    }
};
