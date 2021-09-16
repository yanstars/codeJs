function isCircleObject (obj) {
  let hasCircle = false
  const map = new Map()
  function loop (obj) {
    console.log('lopp', Object.keys(obj))
    const keys = Object.keys(obj)
    keys.forEach(key => {
      const value = obj[key]
      if (typeof value == 'object' && value !== null) {
        if (map.has(value)) {
          hasCircle = true
        } else {
          map.set(value)
          loop(value)
        }
      }
    })
  }

  loop(obj)

  return hasCircle
}


// function isCircleObject (obj) {
//   let map = new Map()
//   map.set(obj)

//   function loop (obj) {
//     console.log('lopp', Object.keys(obj))
//     for (const key in obj) {
//       const element = obj[key]
//       if (typeof element == 'object' && element !== null) {
//         if (map.has(element)) {
//           return true
//         } else {
//           map.set(element)
//           if (loop(element)) {
//             return true
//           }
//         }
//       }
//     }
//     return false
//   }

//   return typeof obj == 'object' && obj !== null ? loop(obj) : false
// }


let a = {
  b: {
    c: {
      d: {
        e: {},
        f: {
          g: {
            h: {

            }
          }
        }
      }
    }
  }
}

a.b.c.d.e = a.b
a.b.c.d.f.g.h = a.b.c



console.log(isCircleObject(a))
// console.log(JSON.stringify(a))

// console.log( Object.prototype.toString.call(a).slice(8,-1))