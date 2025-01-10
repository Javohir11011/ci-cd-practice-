import express from "express";

const app = express();
app.use(express.json())

app.use('/test', (req, res) => {
  res.send("test 1 completed")
})

app.use('/test2', (req, res) => {
  res.send("test 1 completed")
})

app.listen(1111, () => {
  console.log("server running on 1111 port");
});
