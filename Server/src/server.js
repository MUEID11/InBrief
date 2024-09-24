const { port } = require("../secret");
const app = require("./app");



app.listen(port, () => {
    console.log(`InBrief is running on port ${port}`);
  });
  