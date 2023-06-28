
// textarea add
function addNode(){
let newNode= document.createElement('textarea');

let acob = document.getElementById("accb");
let acbtn = document.getElementById("acbtn");

 acob.insertBefore(newNode,acbtn);
}
function addNodew(){
    let newNode = document.createElement('textarea');

    let weOb = document.getElementById("wecb");
    let webtnOb = document.getElementById("webtn");

    weOb.insertBefore(newNode,webtnOb);
}

function addNodes(){
    let newNode = document.createElement('textarea');

    let skiOb = document.getElementById("skiu");
    let skibtnOb = document.getElementById("skibtn");

    skiOb.insertBefore(newNode,skibtnOb);

}

// on generate cv

function genButton(){
   document.style.visibility ="hidden";
}