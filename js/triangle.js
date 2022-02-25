var base = 4
var height = 4

// 三角形の面積
function triangleArea(base, height) {
  return (base * height) / 2
}

console.log(triangleArea(base, height))

// Arrow関数で三角形の面積を求める
const triangleArea_1 = (base, height) => {
  return (base * height) / 2
}

console.log(triangleArea_1(base, height))
