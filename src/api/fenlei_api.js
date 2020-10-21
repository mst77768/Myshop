import ajax from "./ajax"
//定义一个全局变量--全局路径
// const Base_URL = "/api"

export const fenlei = () => {
    return ajax("/api/catalog/list") //请求这一个接口
}