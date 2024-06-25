require("dotenv").config();

const experss = require("express");
const app = experss();
const cors = require("cors");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const { connectdb } = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(experss.json());
//Mount the Router: to use the router in your main express app , you can 'mount' it at a specific URL prefix.
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);

// app.get("/", (req, res) => {
//   res.status(200).send("HEllo");
// });
app.use(errorMiddleware);

connectdb().then(() => {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`sever is running on port ${PORT} `);
  });
});
