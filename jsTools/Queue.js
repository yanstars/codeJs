
function exeute (fn, delay) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            try {
                fn.call(this, ...arguments)
                res()
            } catch (error) {
                rej(error)
            }
        }, delay)
    })
}

class Queue {
    constructor() {
        this.list = [];
        this.errfn = null
    }

    add (fn, delay) {
        this.list.push({ fn, delay })
        return this
    }
    err (fn) {
        this.errfn = fn
    }
    run () {
        console.log('start :>> ', this.list);
        this.list.reduce(async (pre, now) => {
            await exeute(pre.fn, pre.delay)
            return exeute(now.fn, now.delay).catch(err => {
                this.errfn.call(this, ...err)
            })
        })
        this.list = []
        return this
    }
}

let obj = new Queue()

obj.add(() => {
    console.log('i', 1)
}, 1000).add(() => {
    console.log('i', 2)
}, 2000).run().err((err) => { console.log('err :>> ', err); })





//  two  

// class Queue {
//     constructor() {
//         this.arr = []
//         this.time = 0
//     }
//     task (ms, f) {
//         this.arr.push([ms, f])
//         return this
//     }
//     start () {
//         while (this.arr.length) {
//             const [ms, f] = this.arr.shift()
//             this.time += ms
//             setTimeout(f, this.time)
//         }
//         this.time = 0
//     }
// }

// new Queue()
//     .task(1000, () => {
//         console.log(1);
//     })
//     .task(2000, () => {
//         console.log(2);
//     })
//     .task(1000, () => {
//         console.log(3);
//     })
//     .start();
