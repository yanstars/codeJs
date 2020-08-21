// 节流防抖


function throttle (func, delay) {
    let lastTime = 0;
    return function (e) {
        let nowTime = new Date().getTime()
        if (nowTime - lastTime > delay) {
            func.apply(this, arguments);
            lastTime = nowTime;
        }
    }
}




function debounce (handle, delay) {
    let time = null;
    return function () {
        let self = this, arg = arguments;
        clearTimeout(time);
        time = setTimeout(function () {
            handle.apply(self, arg);　　//this绑定
        }, delay)
    }
}