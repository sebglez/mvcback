const express = require("express");
const { itemRouter, userRouter } = require("./routes");
const cors = require("cors");

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/item", itemRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
