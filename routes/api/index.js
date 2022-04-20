//ルーティングを作成する場所

var express = require("express");
const { route } = require("express/lib/application");
const { param } = require("express/lib/request");
const tasks = require("../../src/tasks.js");

var router = express.Router();


/* 商品一覧を取得するルーティング */
router.post("/tasks", async function (req, res, next) { //req,res,nextの処理がされる
  const postTasks = await tasks.postTasks(req.body); //データベースと接続する処理 リクエストデータの値をここでとってきてる
  res.send(postTasks);
});

/*１件の商品情報を取得するルーティング */
router.get("/tasks", async function (req, res, next) {
  const getTasks = await tasks.getTasks(); //getTasksとは？ってこと あとこの（）ないと表示されんかった
  res.send(getTasks); //これを送る taskに
  });

router.get("/tasks/:id", async function(req, res, next){
  const getTasksId = await tasks.getTasksId(req.params.id);
  res.send(getTasksId);
});

router.patch("/tasks/:id", async function(req, res, next){
  const patchTasksId = await tasks.patchTasksId(req.params.id, req.body); //DBのレコードを特定するためのid req.bodyはフォームの値が格納
  res.send(patchTasksId);
});

router.delete("/tasks:id", async function (req, res, next){
  const deleteTasksId = await tasks.deleteTasksId(req.params.id);
  res.send(deleteTasksId);
});

module.exports = router;
