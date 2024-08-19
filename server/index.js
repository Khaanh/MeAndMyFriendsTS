const { log } = require("console");
const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 8800;

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	next();
});

const data = fs.readFileSync(
	`${__dirname}/data/my-friends/friendsData.json`,
	"utf-8"
);

app.use("/api/v1/friends", (req, res) => {
	res.status(200).send({
		data: JSON.parse(data),
	});
	res.end();
});

app.listen(PORT, () => {
	console.log(`Server running on: http://localhost:${PORT}`);
});
