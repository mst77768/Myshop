//mutations里面定义的方法是用来修改state
import {
    MessageBox
} from 'mint-ui';
let mutations = {
    getdata(state, data) {
        state.datalist = data
    },
    setindex(state, data) {
        state.lunindex = data
    },
    setlike(state, data) {
        state.like.push(data);
        let app = [];
        for (let i = 0; i < state.like.length; i++) {
            if (app.indexOf(state.like[i]) == -1) {
                app.push(state.like[i])
            }
        }
        state.like = app
    },
    addshopcar(state, data) { //存储数据到本地
        state.shopcar.push(data)
        localStorage.setItem("shopcar", JSON.stringify(state.shopcar))
    },
    jia(state, data) {
        state.shopcar[data].number++;
        localStorage.setItem("shopcar", JSON.stringify(state.shopcar))
    },
    jian(state, data) {
        if (state.shopcar[data].number > 1) {
            state.shopcar[data].number--;
        } else {
            MessageBox({
                title: '提示',
                message: '亲，至少要购买一个哦！'
            });
        }
    },
    change(state, data) {
        if (data.num < 1) {
            state.shopcar[data.index].number = 1;
            MessageBox({
                title: '提示',
                message: '亲，至少要购买一个哦！'
            });
        } else {
            state.shopcar[data.index].number = data.num;
        }
        localStorage.setItem("shopcar", JSON.stringify(state.shopcar))
    },
    klot(state, data) { //修改这个选择框的选中与否
        state.shopcar[data].flag = !state.shopcar[data].flag;
        let all = state.shopcar.every((item) => {
            return item.flag == true
        })
        state.selectall = all; //判断是否
        localStorage.setItem("checkAll", JSON.stringify(state.selectall))
        localStorage.setItem("shopcar", JSON.stringify(state.shopcar))
    },
    all(state) {
        state.selectall = !state.selectall;
        state.shopcar.forEach(element => {
            element.flag = state.selectall
        });
        localStorage.setItem("checkAll", JSON.stringify(state.selectall))
        localStorage.setItem("shopcar", JSON.stringify(state.shopcar))
    },
    del(state, index) {
        MessageBox.confirm('确定执行此操作?').then(action => {
            console.log(action)
            state.shopcar.splice(index, 1)
            localStorage.setItem("checkAll", JSON.stringify(state.selectall))
            localStorage.setItem("shopcar", JSON.stringify(state.shopcar))
        })
    }

}
export default mutations