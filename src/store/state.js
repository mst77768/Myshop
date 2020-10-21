let state = {
    datalist: [],
    flag: true,
    route: "",
    lunindex: 0,
    like: [],
    shopcar: localStorage["shopcar"] ? JSON.parse(localStorage["shopcar"]) : [],
    selectall: localStorage["checkAll"] ? JSON.parse(localStorage["checkAll"]) : true
}
export default state