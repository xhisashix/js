var road_length = 3 // 道の長さ
var precipitation = 200 //洪水量

var road = [
  ['100', '200', '20'],
  ['100', '20', '20'],
  ['500', '200', '20'],
]
for (let j = 0; j < road_length; j++) {
  for (let i = 0; i < road[j].length; i++) {
    console.log(road[j][i])
    if (precipitation <= road[j][i]) {
      console.log("オーバー")
      break
    }
  }
}

console.log(road[1].map(Number))


