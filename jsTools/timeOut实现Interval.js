function MyInterval (fn, time) {
  let flag = true
  function loop () {
    if (flag) {
      fn()
      setTimeout(loop, time)
    }
  }
  setTimeout(loop, time)
  return () => {
    flag = false
  }
}


let cancel = MyInterval(() => {
  console.log(1)
}, 1000)


setTimeout(cancel, 5000)