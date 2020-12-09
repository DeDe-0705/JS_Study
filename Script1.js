var app = require("./vueTest.js");
function phoneTest() {
    let len = 4;
    let phone = $('#mark').val(); // js使用jQuery需要在html导入jQuery库。
    // let phone = String(document.getElementById("mark").value);
    phone = phone.slice(0,len*-1) + "*".repeat(len);
    let span = document.getElementsByTagName("span");
    span[0].innerHTML = phone;
    app.sayName("hello");
}