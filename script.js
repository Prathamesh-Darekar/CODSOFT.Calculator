let str = "";
let btns = document.querySelectorAll("button");

Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            str = eval(str);
            str=str.toFixed(3);
        }
        else if(e.target.innerHTML=='C'){
            str="";
        }
        else {
            str += e.target.innerHTML;
        }
        document.querySelector("input").value = str;
    })
});
