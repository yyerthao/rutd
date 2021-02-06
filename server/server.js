const express = require("express");
require("dotenv").config();

const app = express();
const bodyParser = require("body-parser");
const sessionMiddleware = require("./modules/session-middleware");

const passport = require("./strategies/user.strategy");

// Route includes
const categoryRouter = require("./routes/category.router");
const matchRouter = require("./routes/match.router");
const acctType = require("./routes/acctType.router");
const userRouter = require("./routes/user.router");
const dropRouter = require("./routes/drop.router");
const demographicRouter = require("./routes/demographic.router");
const serviceRouter = require("./routes/service.router");
const maladyRouter = require("./routes/malady.router");
const compensationRouter = require("./routes/compensation.router");

const vetRouter = require("./routes/vet.router");
const joinRouter = require("./routes/join-org.router.js");
const orgRouter = require("./routes/org.router.js");
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/match", matchRouter);
app.use("/api/vet", vetRouter);
app.use("/api/acctType", acctType);
app.use("/api/user", userRouter);
app.use("/api/drop", dropRouter);
app.use("/api/demographic", demographicRouter);
app.use("/api/service", serviceRouter);
app.use("/api/malady", maladyRouter);
app.use("/api/compensation", compensationRouter);
app.use("/api/join", joinRouter);
app.use("/api/org", orgRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
