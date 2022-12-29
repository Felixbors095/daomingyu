function User(){
        if (user.value == ""){
            usererro.style.display = "block"
            usererro.innerText = "字符不能为空"
            return;
            }
            if (user.value == " "){
                usererro.style.display = "block"
                usererro.innerText = "第一个字符不能为空格"
                return;
                }
            window.location.href = "https://cn.bing.com/search?q=" + user.value;
}
function Musci1(){
    Musci12.style.display = "block"
    mubt.innerText = "X"
}



