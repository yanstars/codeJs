// todo 迭代 
// 牛顿迭代
// 二分查找




console.log(1)
Promise.resolve().then(res=>{
  console.log(2)
  Promise.resolve().then(()=>{
    console.log(4)
  })
})
setTimeout(()=>{
  console.log(5)
})
console.log(6)