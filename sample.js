
// 巻き上げ(ホイスティング)
var str = "webcamp"

function foo(){
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()

// letのスコープを書き換える
// for (let i = 0; i < 10; i++){
//   console.log(i)
// }

// console.log(i)

// letのスコープ
// function foo(){
//   let x = "webcamp"
//   {
//     let y = "hello webcamp"
//   }
//   console.log(x)
//   console.log(y)
// }

// foo()


//varのscope練習
// var str = "webcamp"

// function foo(){
//   console.log(str)
//   var y = "hello"
// }

// foo()
// console.log(y)

// const による再代入
// const nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// letによる再代入
// let nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// varによる再代入
// var nickname = "taro"
// console.log(nickname)
// nickname = "Ichiro"
// console.log(nickname)


// constによる再宣言→再宣言は不可
// const nickname = "taro"
// console.log(nickname)
// const nickname = "Ichiro"
// console.log(nickname)

// letによる再宣言→再宣言は不可
// let nickname = "taro"
// console.log(nickname)
// let nickname ="Ichiro"
// console.log(nickname)


// varによる再宣言→再宣言が可能
// var nickname = "taro"
// console.log(nickname)
// var nickname ="Ichiro"
// console.log(nickname)

