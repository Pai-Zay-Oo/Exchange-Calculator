let input = document.getElementById("input");
let to = document.getElementById("to");
let from = document.getElementById("from");
let result = document.getElementById("result");

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
    console.log(x,y,z);
    //first step 
     let first = x * y;
    
    let second = first/z;
    console.log(second.toFixed(2));

    //Set State
    result.innerHTML = second.toFixed(2);
    input.focus();
    input.value='';
    from.value='';
    result.value = 0.00;



});

