function User(){
    if (user.value == ""){
    usererro.style.display = "block"
    usererro.innerText = "用户名不能为空"
    return;
    }
    if (pwd.value == ""){
        usererro.style.display = "block"
        usererro.innerText = "密码不能为空"
        return;
    }
    if (user.value == "admin" && pwd.value == "admin"){
        usererro.style.display = "block"
        usererro.innerText = "登录成功!"
        usererro.color = "green";
        window.location.href = "index.html?username=226a" + user.value;
        return;
        
    }
    if (user.value == "user" && pwd.value == "user"){
        usererro.style.display = "block"
        usererro.innerText = "登录成功!"
        usererro.color = "green";
        window.location.href = "index.html?username=0205" + user.value;
        return;
        
    }
}



