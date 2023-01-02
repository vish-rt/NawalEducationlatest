const express = require("express");
const port = 8080;

const user_model = require("./users_module");
const User = user_model.User;

const app = express();
app.use(express.json());

var cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
    res.send("Database active");
})

app.post("/user", async (req, res) => {
    console.log(req.body);
    let u = await User(req.body);
    let result = u.save();
    res.send(req.body);
})

app.listen(process.env.PORT || port, () => {	
	console.log(`Listening on port ${port}`);
});