var array = ['4 4', '#.#.', '....', '..#.', '....']

// 配列の分解
function getArray(array) {
  var array = array.split('')
  return array
}

// 配列の2つ目以降を別の配列Aに入れる
// 配列Aの要素のそれぞれを分解して4つずつ配列Bに入れる
function getArray2(array) {
  var array2 = []
  for (var i = 1; i < array.length; i++) {
    var array3 = array[i].split('')
    array2.push(array3)
  }
  return array2
}


var arrayC = getArray2(array)
console.log(arrayC)

// 連想配列の要素からすべての＃の場所を探す
function getHash(array) {
  var array2 = []
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j] === '#') {
        array2.push([i, j])
      }
    }
  }
  return array2
}

console.log(getHash(arrayC))