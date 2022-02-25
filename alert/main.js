//alertを表示させる関数
function showAlert() {
  alert('こんにちは')
}

// 計算の答えをアラート表示
function showAnswer() {
  alert(2 * 3)
}

// メールアドレスの正規表現
function checkMail() {
  var mail = document.getElementById('mail').value
  var pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/
  if (pattern.test(mail)) {
    alert('正しいメールアドレスです')
  } else {
    alert('正しいメールアドレスではありません')
  }
}

// 文字列を空白で分割する
function splitString() {
  var str = 'Hello World Hello World'
  var result = str.split(' ', 2)
  alert(result)
}

// 正規表現で文字列を分割
function splitString2() {
  var str = 'Hello World Hello World'
  var pattern = /Hello/
  var result = str.split(pattern, 2)
  alert(result)
}



splitString2()

// 文字列の分割
