function observe (data) {
    if (!data || typeof data !== 'object') return;
    Object.keys(data).forEach(key => {
        if (typeof data[key] === 'object') {
            observe(data[key]);
        }
        objObserveReal(data, key, data[key])

    })
}

function objObserveReal (obj, key, value) {

    // let sub = new Sub()
    Object.defineProperty(obj, key, {
        get: function () {
            console.log('get',)
            /** 
             * 收集依赖 sub.add()
            */
            return value;
        },
        set: function (newVal) {
            console.log('set',)
            /** 
             * 派发更新  sub.notify()
             */
            value = newVal;
        }
    });

}

a = {
    name: 1, son: {
        name: 'son'
    }
}
observe(a)
a.son.name