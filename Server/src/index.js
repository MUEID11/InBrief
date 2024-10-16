const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const createError = require('http-errors');
const rateLimit = require('express-rate-limit');
const { port } = require('../secret');
const dbConnection = require('./config/db');
const userHandlers = require('./routers/userHandlers');
const searchRoutes = require('./routers/search');
const articleHandlers = require('./routers/articleHandlers');
const CommentRoute = require('./routers/CommentRoute');
const discussionRouter = require('./routers/ForumRouters/discussionRouter');
const commentRouters = require('./routers/ForumRouters/commentRouter');

const app = express();

// app.use('/uploads', express.static('uploads')); // Serve uploaded images

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  message: '  Too many requests from this IP .  Please try again later',
});

app.use(rateLimiter);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ['http://localhost:5173', 'https://inbrief-3d9ce.web.app'], // Allow your frontend domain
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'], // Allow necessary methods                                             // Allow cookies and credentials
  })
);

//USERS ROUTE
app.use('/users', userHandlers);
// APPLICATION ROUTES
app.use('/articles', articleHandlers);
//USERS ROUTE
app.use('/users', userHandlers);
// FORUM ROUTE (discussion route)
app.use('/forum', discussionRouter);
// FORUM ROUTE (comment route)
app.use('/forum', commentRouters);

// Comment ROUTES
app.use('/comments', CommentRoute);

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'server is working finee',
  });
});
app.get('/test', (req, res) => {
  res.status(200).send({
    message: 'api security testing',
  });
});
// Search feature
app.use('/api', searchRoutes);

// client error handling
app.use((req, res, next) => {
  next(createError(404, 'route not found'));
});

// server error handling -> all the errors will come here
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});
//database connection
dbConnection();

app.listen(port, () => {
  console.log(`InBrief is running on port ${port}`);
});