// Promise.all

const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'
function MyPromise (executor) {
    this.state = PENDING
    this.value = undefined
    this.reason = undefined
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []



    let resolve = (value) => {
        if (this.state === PENDING) {
            this.state = RESOLVED
            this.value = value
            this.onRejectedCallbacks.forEach(fn => fn(this.value))
        }
    }

    let reject = (reason) => {
        if (this.state === PENDING) {
            this.state = REJECTED
            this.reason = reason
            this.onRejectedCallbacks.forEach(fn => fn(this.reason))
        }
    }

    try {
        executor(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

MyPromise.prototype.then = function (onResolved, onRejected) {
    // TODO  链式调用
    // TODO  .then 穿透
    if (this.state === RESOLVED) {
        onResolved(this.value)
    }

    if (this.state === REJECTED) {
        onRejected(this.reason)
    }
    if (this.state === PENDING) {
        this.onResolvedCallbacks.push(onResolved)
        this.onRejectedCallbacks.push(onRejected)
    }
}



new MyPromise((res, rej) => {
    setTimeout(() => {
        res(2)
    }, 2000)
}).then(console.log, console.log)







// const AllPromise = arr => {
//     return new Promise((res, rej) => {
//         let resCounter = 0
//         let resultArr = []
//         arr.forEach((element, index) => {
//             Promise.resolve(element).then((value) => {
//                 resCounter++
//                 resultArr[index] = value
//                 if (resCounter == arr.length) res(resultArr)
//             }, err => {
//                 rej(err)
//             })

//         })
//     })
// }


// const RacePromise = arr => {
//     return new Promise((res, rej) => {
//         arr.forEach(item => {
//             Promise.resolve(item).then(value => {
//                 res(value)
//             }, err => {
//                 rej(err)
//             })
//         })
//     })


// }



// const AllSelect = arr => {
//     return new Promise((res, rej) => {
//         let result = []
//         let done = 0
//         arr.forEach((item, index) => {
//             Promise.resolve(item).then(value => {
//                 result[index] = {
//                     type: 'res',
//                     value
//                 }
//                 done++
//                 if (done == arr.length) {
//                     res(result)
//                 }
//             }, err => {

//                 result[index] = {
//                     type: 'rej',
//                     err
//                 }
//                 done++
//                 if (done == arr.length) {
//                     res(result)
//                 }
//             })

//         })
//     })
// }
// var p1 = Promise.resolve(3),
//     p2 = Promise.resolve(2),
//     p3 = Promise.resolve(1)


// AllPromise([p1, p2, p3]).then(results => {
//     console.log(results)
// }).catch(e => {
//     console.log('rej', e)
// })

