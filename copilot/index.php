// 配列の値の合計を求め関数
function sum($array) {
$total = 0;
foreach ($array as $value) {
$total += $value;
}
return $total;
}