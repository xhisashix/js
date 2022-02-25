var stocking = 1 //仕入れ
var stocking_remaining = 80 //仕入れの残り
var side_dish = 40 //お惣菜
var finish_remaining = 0 //最終的に残った量


var stoking_1000 = stocking * 1000 // ｇに変更
var stocking_remaining_percent = stocking_remaining / 100 //%に変換
var remaining_1 = stoking_1000 - (stoking_1000 * stocking_remaining_percent) //一回目の売れ残り計算
var side_dish_percent = side_dish / 100

var remaining_2 = remaining_1 - (remaining_1 * side_dish_percent)

finish_remaining = remaining_2 / 1000

console.log(finish_remaining)
