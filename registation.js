 
 

function registration(event) {
    let blind = document.querySelector('#blind');
    console.log(blind.getAttribute("isHide") == "true", blind.getAttribute("isHide"))

    if (blind.getAttribute("isHide") == "true") {
        blind.setAttribute("isHide", "false")
        const cwa = document.body.clientWidth;
        document.body.style.overflow = "hidden";
        const cwl = document.body.clientWidth;
        if (cwa < cwl) {
            document.body.style.paddingRight = cwl - cwa + "px";
        };
    } else {
        blind.setAttribute("isHide", "true")
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
    }
}

const formchild = document.querySelector('.registration-form');
formchild.onclick = function (event) {
    event.stopPropagation(); //блокируется дальнейшая передача события
};

let btn_login = document.querySelectorAll('li.login, #blind');
for (var i in btn_login) {
    btn_login[i].addEventListener("click", registration);
    btn_login[i].addEventListener("click", registration);
};