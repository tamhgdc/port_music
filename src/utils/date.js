function formatDate(val) {
    // console.log(val);
    const date = new Date(val)
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    // var hour = date.getHours();
    // var minute = date.getMinutes();
    // var second = date.getSeconds();
    //  return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second; 
    return year + '-' + (String(month).length > 1 ? month : '0' + month) + '-' +
        (String(day).length > 1 ? day : '0' + day)
    // + ' ' + (String(hour).length > 1 ? hour : '0' + hour) + ':' + (String(minute).length > 1 ? minute : '0' + minute)
    // + ':' + (String(second).length > 1 ? second : '0' + second)
}
//如果记得时间戳是毫秒级的就需要*1000 不然就错了记得转换成整型
// var d=new Date(1553547600000); //Tue Mar 26 2019 05:00:00 GMT+0800 (中国标准时间)

// console.log(formatDate(d)) //2019-03-26 05:00:00
export default formatDate