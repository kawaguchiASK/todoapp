//新規登録処理
 const mysql = require("mysql2/promise"); //mysql使いますよの呼び出し
 const config = require("../config.js");
const { patch } = require("../routes/api/index.js");

//  タスクの新規お登録するAPI @returnsレスポンス JSON

postTasks = async function (body) { //request.body引き取るための変数
  let connection = null;//データベースの接続のための処理をいったん初期化 こういうものだと思っててください
  console.log("post222")
  try {
    connection = await mysql.createConnection(config.dbSetting); //こう書くものだと思っててください
    // ここに SQL を記述する
    const sql = //ここからが問題、考えなきゃいけない
      "INSERT INTO todoapp.t_tasks (task_name, deadline, category_id) VALUES (?,?,?);";//タスクの名前。データベースのカラム
     let d = [body.taskName, body.deadline, body.category]; //bodeのデータを引数で渡す この３つの順番で入れていく
     const [rows, fields] = await connection.query(sql, d); //こいつが実行されて初めてデータベースに登録される
    // console.log(rows);
    return rows;
  } catch (err) {
    console.log(err);
  } finally {
    connection.end();  
    console.log("postowata")
  }
};

getTasks = async function() {
    let connection = null;
    console.log("get222")
    try { 
        connection = await mysql.createConnection(config.dbSetting); //多分ここに問題 コネクションがうまくいってない
        const sql =
                "SELECT t_tasks.id, t_tasks.category_id, m_category2.category_name, t_tasks.task_name, DATE_FORMAT(t_tasks.deadline, '%Y-%m-%d') AS deadline_date, t_tasks.task_status, t_tasks.created_at, t_tasks.updated_at, t_tasks.task_importance FROM t_tasks LEFT JOIN m_category2 ON t_tasks.category_id = m_category2.id order by task_status desc, task_importance asc;";
              const [rows, fields] = await connection.query(sql);
              return rows;  //return rows;
    }   catch (e) {
        console.log(e); //errのとき にエラーを表示する
    }   finally{
        connection.end(); 
        console.log("getowata");
    }
};


getTasksToday = async function() {
  let connection = null;
  console.log("gettd222")
  try { 
      connection = await mysql.createConnection(config.dbSetting); //多分ここに問題 コネクションがうまくいってない
      const sql =
              "SELECT t_tasks.id, t_tasks.category_id, m_category2.category_name, t_tasks.task_name, DATE_FORMAT(t_tasks.deadline, '%Y-%m-%d') AS deadline_date, t_tasks.task_status, t_tasks.created_at, t_tasks.updated_at, t_tasks.task_importance FROM t_tasks LEFT JOIN m_category2 ON t_tasks.category_id = m_category2.id WHERE deadline = CURRENT_DATE order by task_status desc, task_importance asc;";
            const [rows, fields] = await connection.query(sql);
            return rows;  //return rows;
  }   catch (e) {
      console.log(e); //errのとき にエラーを表示する
  }   finally{
      connection.end(); 
      console.log("gettdowata");
  }
};

getTasksLife = async function() {
  let connection = null;
  try { 
      connection = await mysql.createConnection(config.dbSetting); //多分ここに問題 コネクションがうまくいってない
      const sql =
              "SELECT t_tasks.id, t_tasks.category_id, m_category2.category_name, t_tasks.task_name, DATE_FORMAT(t_tasks.deadline, '%Y-%m-%d') AS deadline_date, t_tasks.task_status, t_tasks.created_at, t_tasks.updated_at, t_tasks.task_importance FROM t_tasks LEFT JOIN m_category2 ON t_tasks.category_id = m_category2.id WHERE category_id = 1 order by task_status desc, task_importance asc;";
            const [rows, fields] = await connection.query(sql);
            return rows;  //return rows;
  }   catch (e) {
      console.log(e); //errのとき にエラーを表示する
  }   finally{
      connection.end(); 
  }
};

getTasksStudy = async function() {
  let connection = null;
  try { 
      connection = await mysql.createConnection(config.dbSetting); //多分ここに問題 コネクションがうまくいってない
      const sql =
              "SELECT t_tasks.id, t_tasks.category_id, m_category2.category_name, t_tasks.task_name, DATE_FORMAT(t_tasks.deadline, '%Y-%m-%d') AS deadline_date, t_tasks.task_status, t_tasks.created_at, t_tasks.updated_at, t_tasks.task_importance FROM t_tasks LEFT JOIN m_category2 ON t_tasks.category_id = m_category2.id WHERE category_id = 2 order by task_status desc task_importance asc;";
            const [rows, fields] = await connection.query(sql);
            return rows;  //return rows;
  }   catch (e) {
      console.log(e); //errのとき にエラーを表示する
  }   finally{
      connection.end(); 
  }
};


getTasksWork = async function() {
  let connection = null;
  try { 
      connection = await mysql.createConnection(config.dbSetting); //多分ここに問題 コネクションがうまくいってない
      const sql =
      "SELECT t_tasks.id, t_tasks.category_id, m_category2.category_name, t_tasks.task_name, DATE_FORMAT(t_tasks.deadline, '%Y-%m-%d') AS deadline_date, t_tasks.task_status, t_tasks.created_at, t_tasks.updated_at, t_tasks.task_importance FROM t_tasks LEFT JOIN m_category2 ON t_tasks.category_id = m_category2.id WHERE category_id = 3 order by task_status desc task_importance asc;";
            const [rows, fields] = await connection.query(sql);
            return rows;  //return rows;
  }   catch (e) {
      console.log(e); //errのとき にエラーを表示する
  }   finally{
      connection.end(); 
  }
};


getTasksHobby = async function() {
  let connection = null;
  try { 
      connection = await mysql.createConnection(config.dbSetting); //多分ここに問題 コネクションがうまくいってない
      const sql =
      "SELECT t_tasks.id, t_tasks.category_id, m_category2.category_name, t_tasks.task_name, DATE_FORMAT(t_tasks.deadline, '%Y-%m-%d') AS deadline_date, t_tasks.task_status, t_tasks.created_at, t_tasks.updated_at, t_tasks.task_importance FROM t_tasks LEFT JOIN m_category2 ON t_tasks.category_id = m_category2.id WHERE category_id = 4 order by task_status desc task_importance asc;";
            const [rows, fields] = await connection.query(sql);
            return rows;  //return rows;
  }   catch (e) {
      console.log(e); //errのとき にエラーを表示する
  }   finally{
      connection.end(); 
  }
};


getTasksClr = async function() {
  let connection = null;
  try { 
      connection = await mysql.createConnection(config.dbSetting); //多分ここに問題 コネクションがうまくいってない
      const sql =
      "SELECT t_tasks.id, t_tasks.category_id, m_category2.category_name, t_tasks.task_name, DATE_FORMAT(t_tasks.deadline, '%Y-%m-%d') AS deadline_date, t_tasks.task_status, t_tasks.created_at, t_tasks.updated_at, t_tasks.task_importance FROM t_tasks LEFT JOIN m_category2 ON t_tasks.category_id = m_category2.id WHERE task_status = 2 order by task_status desc task_importance asc;";
            const [rows, fields] = await connection.query(sql);
            return rows;  //return rows;
  }   catch (e) {
      console.log(e); //errのとき にエラーを表示する
  }   finally{
      connection.end(); 
  }
};

getTasksCgId = async function(id, body){
  console.log("up000");
  let connection = null;
  try{
    connection = await mysql.createConnection(config.dbSetting);
    const sql =
      // "SELECT t_tasks.id, t_tasks.category_id, m_category2.category_name, t_tasks.task_name, DATE_FORMAT(t_tasks.deadline, '%Y-%m-%d') AS deadline_date, t_tasks.task_status, t_tasks.updated_at, t_tasks.created_at FROM t_tasks LEFT JOIN m_category2 ON t_tasks.category_id = m_category2.id WHERE t_tasks.id = ?";
      "SELECT t_tasks.id, t_tasks.category_id FROM t_tasks  WHERE t_tasks.id = ?;"
    let d = [id];
    const [rows, fields] = await connection.query(sql, d);
    return rows;
  } catch (err){
    console.log(err);
  } finally{
    connection.end();
    console.log("upowata");
  }
};

getTasksId = async function(id, body){
  console.log("up000");
  let connection = null;
  try{
    connection = await mysql.createConnection(config.dbSetting);
    const sql =
      // "SELECT t_tasks.id, t_tasks.category_id, m_category2.category_name, t_tasks.task_name, DATE_FORMAT(t_tasks.deadline, '%Y-%m-%d') AS deadline_date, t_tasks.task_status, t_tasks.updated_at, t_tasks.created_at FROM t_tasks LEFT JOIN m_category2 ON t_tasks.category_id = m_category2.id WHERE t_tasks.id = ?";
      "SELECT t_tasks.id, t_tasks.category_id, m_category2.category_name, t_tasks.task_name, DATE_FORMAT(t_tasks.deadline, '%Y-%m-%d') AS deadline_date, t_tasks.task_status, t_tasks.updated_at, t_tasks.created_at, task_importance FROM t_tasks LEFT JOIN m_category2 ON t_tasks.category_id = m_category2.id WHERE t_tasks.id = ?;"
    let d = [id];
    const [rows, fields] = await connection.query(sql, d);
    return rows;
  } catch (err){
    console.log(err);
  } finally{
    connection.end();
    console.log("upowata");
  }
};

patchTasksId = async function(id, body){
  let connection = null;  
  console.log("patch000")
  try{
    connection = await mysql.createConnection(config.dbSetting);
    //kokoni SQL
    const sql =
      "UPDATE t_tasks SET task_name=?, deadline=?, category_id=?, task_status=?, updated_at=?, task_importance=? WHERE id=?;";
      let d = [
        body.taskName, //更新内容のフォームの値をsqlの順番に
        body.deadline,
        body.category,
        body.status,
        new Date(), //これだけ現在の日付を格納
        body.importance,
        id,
      ];
      const [rows, fields] = await connection.query(sql, d);
      return rows;
    } catch (err){
      console.log(err);
    } finally{
      connection.end();
      console.log("patchowata")
  }
}; 


patchTasksCgId = async function(id, body){
  let connection = null;  
  console.log("patch000")
  try{
    connection = await mysql.createConnection(config.dbSetting);
    //kokoni SQL
    const sql =
      "UPDATE t_tasks SET category_id=? WHERE id=?;";
      let d = [
        body.category,
        id,
      ];
      const [rows, fields] = await connection.query(sql, d);
      return rows;
    } catch (err){
      console.log(err);
    } finally{
      connection.end();
      console.log("patchowata")
  }
}; 

getTasksChk = async function(id, body){
  console.log("up000");
  let connection = null;
  try{
    connection = await mysql.createConnection(config.dbSetting);
    const sql =
      "SELECT t_tasks.id, t_tasks.task_status FROM t_tasks  WHERE t_tasks.id = ?;"
    let d = [id];
    const [rows, fields] = await connection.query(sql, d);
    return rows;
  } catch (err){
    console.log(err);
  } finally{
    connection.end();
    console.log("upowata");
  }
};

patchTasksChk = async function(id, body){
  let connection = null;  
  console.log("check000")
  try{
    connection = await mysql.createConnection(config.dbSetting);
    //kokoni SQL
    const sql =
      "UPDATE t_tasks SET task_status=? WHERE id=?;";
      let d = [
        body.status,
        id,
      ];
      const [rows, fields] = await connection.query(sql, d);
      return rows;
    } catch (err){
      console.log(err);
    } finally{
      connection.end();
      console.log("patchowata")
  }
};

getTasksFav = async function(id, body){
  console.log("up000");
  let connection = null;
  try{
    connection = await mysql.createConnection(config.dbSetting);
    const sql =
      "SELECT t_tasks.id, t_tasks.task_importance FROM t_tasks  WHERE t_tasks.id = ?;"
    let d = [id];
    const [rows, fields] = await connection.query(sql, d);
    return rows;
  } catch (err){
    console.log(err);
  } finally{
    connection.end();
    console.log("upowata");
  }
};

patchTasksFav = async function(id, body){
  let connection = null;  
  console.log("check000")
  try{
    connection = await mysql.createConnection(config.dbSetting);
    //kokoni SQL
    const sql =
      "UPDATE t_tasks SET task_importance=? WHERE id=?;";
      let d = [
        body.importance,
        id,
      ];
      const [rows, fields] = await connection.query(sql, d);
      return rows;
    } catch (err){
      console.log(err);
    } finally{
      connection.end();
      console.log("patchowata")
  }
};

//タスク削除API 
deleteTasksId = async function (id) {
  console.log("delete000")
  let connection = null;
  try{
    connection = await mysql.createConnection(config.dbSetting);
    const sql =
     "DELETE from t_tasks WHERE id=?;";
    let d = [id];
    const [rows, fields] = await connection.query(sql, d);
    return rows;
  } catch (err){
    console.log(err);
  } finally{
    connection.end();
    console.log("deleteowata")
  }
};





exports.postTasks = postTasks;
exports.getTasks = getTasks; 
exports.getTasksToday = getTasksToday;
exports.getTasksLife = getTasksLife;
exports.getTasksStudy = getTasksStudy;
exports.getTasksWork = getTasksWork;
exports.getTasksHobby = getTasksHobby;
exports.getTasksClr = getTasksClr;
exports.getTasksId = getTasksId;
exports.getTasksCgId = getTasksCgId;
exports.patchTasksId = patchTasksId;
exports.patchTasksCgId = patchTasksCgId;
exports.patchTasksChk = patchTasksChk;
exports.getTasksChk = getTasksChk;
exports.patchTasksFav = patchTasksFav;
exports.getTasksFav = getTasksFav;
exports.deleteTasksId = deleteTasksId;
