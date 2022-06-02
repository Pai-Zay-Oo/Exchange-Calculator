let input = document.getElementById("input");
let to = document.getElementById("to");
let from = document.getElementById("from");
let result = document.getElementById("result");
let recordList = document.getElementById("recordList");
let deleting = document.getElementById("deleting");

function createOption(x,y,z){
    let o = document.createElement('option');
    let t = document.createTextNode(y);
    o.setAttribute("value", toNum(z))
    o.appendChild(t);
    x.appendChild(o);
}
function toNum(i){
    return Number(i.replace(",",""));
};
function createTr(x){
    let rowSpace = document.getElementById("rowSpace");
    if (rowSpace){
        rowSpace.remove();
    };
    let tr = document.createElement("tr");
    x.map(function(el){
        let td = document.createElement("td");
        let text = document.createTextNode(el);
        td.appendChild(text);
        tr.appendChild(td);
    });
    recordList.append(tr);
};
// function recording(){
//     localStorage.setItem("record",recordList.innerHTML);
// }

for (x in data.rates){
    createOption(to,x,data.rates[x]);
    createOption(from,x,data.rates[x]);
    
};
//Get State
document.getElementById("area").addEventListener("submit",function(e){
    e.preventDefault();
    
    let x = input.value;
    let y = from.value;
    let z = to.value;
    let fromShow = x +" "+ from.options[from.selectedIndex].innerText;
    let toShow = to.options[to.selectedIndex].innerText;
    
    //process
    let first = x * y;
    let second = first/z;
    let resultNum = second.toFixed(2) +" "+ to.options[to.selectedIndex].innerText;
    let date = new Date().toLocaleString();
    let arr = [date,fromShow,toShow,resultNum];
    createTr(arr);
   

    //Set State
    result.innerHTML = second.toFixed(2);
    input.focus();
    input.value='';
    from.value='';
    result.value = 0.00;
});

// function aa(){
//     console.log(from.options[from.selectedIndex].innerText);
// };
// (function () {
//     if(localStorage.getItem("record")){
//         recordList.innerHTML = localStorage.getItem("record");
//     }else{
//         recordList.innerHTML = `<tr id="rowSpace"><td colspan="4">There is no record.</td></tr>`
//     }
// })();

function changeMode() {
    document.body.classList.toggle("night-mode");
    document.getElementById("modeIcon").classList.toggle("fa-sun");
}


