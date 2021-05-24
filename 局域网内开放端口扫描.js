const ping = require('ping')
const net = require('net')


const str = "192.168"
const port = [
  8080, 8888, 10000, 9999, 8890, 9997, 8090, 8889, 9527
]
let restlt = []



for (let i of [50, 61, 62, 30]) {
  for (let j = 1; j <= 255; j++) {
    ping.sys.probe(`${str}.${i}.${j}`, function (isAlive) {
      console.log('object :>> ', `${str}.${i}.${j}`)
      if (isAlive) restlt.push(`${str}.${i}.${j}`)
    })
  }
}



let Socket = net.Socket


let scan = function (host, cb, port) {
  let socket = new Socket()
  socket.setTimeout(1500)
  socket.on('connect', function () {
    socket.end()
    cb && cb(null, host)
  })
  socket.on('timeout', function () {
    socket.destroy()
    cb && cb(new Error('timeout'), host)
  })
  socket.on('error', function (err) {
    cb && cb(err, host)
  })
  socket.on('close', function (err) {
  })
  socket.connect(port, host)
}



setTimeout(() => {
  for (let i of port) {
    restlt.forEach(item => {
      scan(item, function (err, host) {
        if (err) {
          // console.log('Not found', host)
          return
        }
        console.log("Found: ", host + ':' + i)
      },
        i)
    })
  }

}, 10000)




