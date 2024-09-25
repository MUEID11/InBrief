require("dotenv").config();
const port = process.env.SERVER_PORT || 5001;
const mongodbURL = process.env.MONGODB_ATLAS_URL || "mongodb://localhost:27017/newsaggregator";


module.exports ={port,mongodbURL}