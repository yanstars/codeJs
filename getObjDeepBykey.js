
let a = {
    b: {
        c: {
            d: {
                e: 2
            }
        }
    }
}

function get (obj, str) {

    let arr = str.split(".")
    let resut = arr.reduce((last, now, index, arr) => {
        return last[now]
    }, obj)

    console.log('a', resut)

}

get(a, 'b.c.d.e')