const express = require("express");

const app = express();
const PORT = 8800;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(PORT, () => {
	console.log(`Server running on: http://localhost:${PORT}`);
});
