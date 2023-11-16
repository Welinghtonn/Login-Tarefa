function Login(){
    var name = document.getElementById("name").value
    var password = document.getElementById("password").value

    if(name === "oi" && password === "oi"){
        window.location.href = "./adm.html";
    }else{
        window.location.href = "./login.html"
    }
}