const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 8800;

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	next();
});

// ?How to improve ?
const data = fs.readFileSync(
	`${__dirname}/data/navigation.json`,
	"utf-8",
	(err, data) => {
		if (err) throw Error(err);

		return data;
	}
);
const dataObj = JSON.parse(data);

app.get("/api/navigation", (req, res) => {
	console.log(dataObj);
	res.send(dataObj);
});

app.listen(PORT, () => {
	console.log(`Server running on: http://localhost:${PORT}`);
});
