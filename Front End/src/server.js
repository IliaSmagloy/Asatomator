const express = require("express");
const cors = require("cors");const http = require("http");
let server = express();
const fs = require('fs');

let corsOptions = {
	//origin: "*",
	origin: "http://localhost:3000",
	optionsSuccessStatus: 200,
	allowHeaders: ["sessionId", "Content-Type"],
	exposedHeaders: ["sessionId"],
	credentials: true
};

server.use(cors(corsOptions));

server.get("/genAnswer", async (req, res) => {
	let subject = req.query["subject"];
	let speaker = req.query["speaker"];
	let fName = speaker.concat(".txt");
	let text = fs.readFileSync(fName).toString();
	let ansAll = text.split("#");
	let size = ansAll.length;
	let ansIndex = Math.floor(Math.random() *size);
	let ans = ansAll[ansIndex];
	let ansFixed = ans.replace(/@/g, subject);
	let ansFixedFinal = ansFixed.trim();
	res.send(ansFixedFinal);
})
/*
server.get("/getHomeMembers", async (req, res) => {
	let vac = await todo.getHomeMembers();

	res.send(vac);
});

server.get("/getTodoList", async (req, res) => {
	let vac = await todo.getTodoList();

	res.send(vac);
});

server.post("/addTodoList", async (req, res) => {
	let description = req.body["description"];
	let userId = req.body["userId"];

	await todo.addTodoList(description, userId);

	let ans = await todo.getTodoList();
	res.send(ans);
});
*/
//
//server.get("/editVacation", async (req, res) => {
//	let vacId = req.query["id"]-;
//	let vacTitle = req.query["title"];
//	let vacLocation = req.query["location"];
//	let vacImage = req.query["image"];
//	let vacStartDate = req.query["startDate"];
//	let vacEndDate = req.query["endDate"];
//	let vacPrice = req.query["price"];
//
//	await todo.editVacation(vacId, vacTitle, vacLocation, vacImage, vacStartDate, vacEndDate, vacPrice);
//
//	let ans = await todo.getVacations();
//	res.send(ans);
//
//	io.sockets.emit("vacations", {
//		vacations: ans
//	});
//});

/*
server.get("/deleteTodoList", async (req, res) => {
	let id = req.query["id"];

	let result = await todo.deleteTodoList(id);

	console.log("Delete Result: ", result);

	await todo.removeFavoriteAfterVacationDelete(vacID);

	let ans = await todo.getVacations();

	res.send(ans);

	io.sockets.emit("vacations", {
		vacations: ans
	});
});
*/


server.listen(8080);
