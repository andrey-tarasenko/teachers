let addButton = document.getElementById("add")
let clearButton = document.getElementById("clear")
let checkButton = document.getElementById("check")

addButton.onclick = function(){
    let val = document.getElementById("setCookie").value
    if(val === ""){
        alert("Empty value")
    }
    else{
        let date = new Date(Date.now() + (30*86400e3));
        date = date.toUTCString();

        document.cookie = val + ";expires=" + date
        let newElement = document.createElement("p")
        newElement.innerHTML = document.cookie

        document.getElementById("out").innerHTML("<p>" + document.cookie + "</p>")
    }
}

clearButton.onclick = function(){
    if(confirm("Are u sure?")){
        let cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            let eqPos = cookie.indexOf("=");
            let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
        }
    }

}

checkButton.onclick = function(){
    if(document.cookie){
        alert(document.cookie)
    }
    else{
        alert("Empty")
    }
}



