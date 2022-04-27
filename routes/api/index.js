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


router.get("/tasks/today", async function (req, res, next) {
  const getTasksToday = await tasks.getTasksToday(); //getTasksとは？ってこと あとこの（）ないと表示されんかった
  res.send(getTasksToday); //これを送る taskに
  });

router.get("/tasks/life", async function(req, res, next){
const getTasksLife = await tasks.getTasksLife(req.params.id);
res.send(getTasksLife);
});

router.get("/tasks/study", async function(req, res, next){
  const getTasksStudy = await tasks.getTasksStudy(req.params.id);
  res.send(getTasksStudy);
  });

router.get("/tasks/work", async function(req, res, next){
  const getTasksWork = await tasks.getTasksWork(req.params.id);
  res.send(getTasksWork);
  });
  
router.get("/tasks/hobby", async function(req, res, next){
  const getTasksHobby = await tasks.getTasksHobby(req.params.id);
  res.send(getTasksHobby);
  });
  
router.get("/tasks/cleared", async function(req, res, next){
  const getTasksClr = await tasks.getTasksClr(req.params.id);
  res.send(getTasksClr);
  });

router.get("/tasks/:id", async function(req, res, next){
  const getTasksId = await tasks.getTasksId(req.params.id);
  res.send(getTasksId);
});

router.patch("/tasks/:id", async function(req, res, next){
  const patchTasksId = await tasks.patchTasksId(req.params.id, req.body); //DBのレコードを特定するためのid req.bodyはフォームの値が格納
  res.send(patchTasksId);
});



router.get("/tasks/cg/:id", async function(req, res, next){
  const getTasksCgId = await tasks.getTasksCgId(req.params.id);
  res.send(getTasksCgId);
});

router.patch("/tasks/cg/:id", async function(req, res, next){
  const patchTasksCgId = await tasks.patchTasksCgId(req.params.id, req.body); //DBのレコードを特定するためのid req.bodyはフォームの値が格納
  res.send(patchTasksCgId);
});

router.patch("/tasks/chk/:id", async function(req, res, next){
  const patchTasksChk = await tasks.patchTasksChk(req.params.id, req.body);
  res.send(patchTasksChk);
});

router.get("/tasks/chk/:id", async function(req, res, next){
  const getTasksChk = await tasks.getTasksChk(req.params.id);
  res.send(getTasksChk);
});


router.delete("/tasks/:id", async function (req, res, next){ // 削除するDBのレコードを特定するためのid
  const deleteTasksId = await tasks.deleteTasksId(req.params.id);
  res.send(deleteTasksId);
});


module.exports = router;
