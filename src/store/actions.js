import {
    fenlei
} from "../api/fenlei_api";

let actions = {
    async getdata(context) {
        if (context.state.datalist.length == 0) { //当状态管理的这个值为空的时候请求数据
            let data = await fenlei()
            console.log(data.data)
            context.commit("getdata", data.data)
        }
    }
}
export default actions