function ajax (option) {
    var defalus = {
        jsonp: 'callback' //默认发送请求的值是函数名的值   
    }
    // 覆盖默认参数
    for (var attr in option) {
        defalus[attr] = option[attr];
    }
    var p = '';
    if (defalus.data) {
        for (var key in defalus.data) {
            p += key + '=' + defalus.data[key] + '&'
        }
    }
    var cbName;
    if (defalus.jsonpCallback) {
        cbName = defalus.jsonpCallback;
    } else {
        // 回调函数名称
        cbName = 'jQuery' + ('v1.11.1' + Math.random()).replace(/\D/g, '') + '_' + new Date().getTime();
    }
    window[cbName] = function (data) {
        defalus.success(data);
    }

    srciptt = document.createElement('script');
    ajax.srciptt = srciptt
    srciptt.src = defalus.url + '?' + p + defalus.jsonp + '=' + defalus.jsonpCallback
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(srciptt);
}
ajax({
    url: 'http://localhost:3000/getData',
    dataType: 'jsonp',
    jsonp: 'callback',
    jsonpCallback: 'send',
    data: { id: 4, abc: 'hi' },
    success: function (data) {
        console.log(data)
        var head = document.getElementsByTagName('head')[0].removeChild(ajax.srciptt)
        console.log("删除节点");
    }
});