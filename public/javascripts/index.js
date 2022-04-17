// 取得用API実行メソッド
const httpGet = async function (url) {
  try {
    const response = await fetch(url, {
      method: "GET", // GET
    });
    return response.json(); // JSON のレスポンスを JavaScript のオブジェクトに変換
  } catch (err) {
    console.log(err);
  }
};

// 登録用API実行メソッド
const httpPost = async function (url, data) {
  console.log(url);
  console.log(data);
  try {
    const response = await fetch (url, {
      method: "POST", // POST
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json(); // JSON のレスポンスを JavaScript のオブジェクトに変換
  } catch (err) {
    console.log(err);
  }
};


// 更新用API実行メソッド
const httpUpdate = async function (url, data) {
  try {
    const response = await fetch(url, {
      method: "PATCH", // PATCH
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json(); // JSON のレスポンスを JavaScript のオブジェクトに変換
  } catch (err) {
    console.log(err);
  }
};

// 削除用API実行メソッド
const httpDelete = async function (url) {
  try {
    const response = await fetch(url, {
      method: "DELETE", // DELETE
    });
    return response.json(); // JSON のレスポンスを JavaScript のオブジェクトに変換
  } catch (err) {
    console.log(err);
  }
};





// //登録ボタン押したとき
// $("#create-task").on("click", async function() { //async function
//   //request data SHUTOKUsareru by form
//   const requestData = {  //requestDataを定義する
//     taskName: $("#create-form input[name=task]").val(),
//     deadline: $("#create-form input[name=deadline").val(),
//     category: $("#create-form select[name=category").val(),
//   };

//   //新規登録APIを実行
//   const response = await httpPost( 
//     "//" + window.location.host + "/api/tasks",
//     requestData
//   );

//   //画面reload リロードするとエラーが発生する
//   window.location.reload();
// });

