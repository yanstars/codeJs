
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
    let result = arr.reduce((last, now) => {
        return last[now]
    }, obj)

    console.log('a', result)

}

get(a, 'b.c.d.e')