const axios = require("axios")
const fs = require("fs")
const path = require("path")

var Axios = axios.create({
    baseURL: '/'
});

async function downloadFile (url, filepath, name) {
    if (!fs.existsSync(filepath)) {
        fs.mkdirSync(filepath);
    }
    const mypath = path.resolve(filepath, name);
    const writer = fs.createWriteStream(mypath);
    const response = await Axios({
        url,
        method: "GET",
        responseType: "stream",
    });
    response.data.pipe(writer);
    return new Promise((resolve, reject) => {
        writer.on("finish", resolve);
        writer.on("error", reject);
    });
}

downloadFile("http://59.110.238.56/downPdf", './', 'testaa.pdf')



// var http=require("http");

// http.get("http://127.0.0.1:3000",function(data){
//     var str="";
//     data.on("data",function(chunk){
//         str+=chunk;//监听数据响应，拼接数据片段
//     })
//     data.on("end",function(){
//         console.log(str.toString())
//     })
// })