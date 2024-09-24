const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const rateLimit = require("express-rate-limit");
const userRouter = require("./routers/userRouter");

const app = express();

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // Limit each IP to 50 requests per `window` (here, per 15 minutes).
  message: "  Too many requests from this IP .  Please try again later",
});

app.use(rateLimiter);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users",userRouter)

app.get("/", (req, res) => {
  res.status(200).send({
    message: "server is working finee",
  });
});
app.get("/test", (req, res) => {
  res.status(200).send({
    message: "api security testing",
  });
});



// client error handling
app.use((req, res, next) => {
  next(createError(404, "route not found"));
});

// server error handling -> all the errors will come here
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
