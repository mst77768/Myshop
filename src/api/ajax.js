import axios from "axios"

//导入axios模块
//封装一个ajax请求
export default function ajax(url = "", params = {}, type = "get") {

    //1、定义Promise对象
    let promise
    return new Promise((resolve, reject) => {
        //2、判断请求方式
        //params={size:10,page:1}   //size=10&page=1
        if ("get" === type) {
            let paramsStr = ""

            Object.keys(params).forEach(key => {
                paramsStr += key + "=" + params[key] + "&"
            })

            if (paramsStr !== "") {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf("&")) //size=10&page=1
            }
            //拼接url的完整路径
            url += "?" + paramsStr
            promise = axios.get(url)
        } else if ("post" === type) { //post请求方式
            promise = axios.post(url, params)
        }

        //返回请求结果
        promise.then((response) => {
            resolve(response.data)
        }).catch((err) => {
            reject(err)
        })
    })
}