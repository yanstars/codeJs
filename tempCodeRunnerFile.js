let pa = {
    name:'pa'
}

let ch =  Object.create(pa)


ch.age = 25
for(key in ch){
    console.log('key', key)
}