
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
//    set element
console.log("generate cv")
    let nameField = document.getElementById('nameF').value;
   let nameT =document.getElementById('nameT');
    nameT.innerHTML = nameField ;

    let nameFie = document.getElementById('nameF').value;
   let nameTt =document.getElementById('namTt');
    nameTt.innerHTML = nameFie ;

    let emai = document.getElementById('emai').value;
   let emaiT =document.getElementById('emaiT');
    emaiT.innerHTML = emai ;

    let phoneno = document.getElementById('pen').value;
   let phonet =document.getElementById('phnoT');
    phonet.innerHTML = phoneno;

    let addres = document.getElementById('addre').value;
   let adret =document.getElementById('addT');
    adret.innerHTML = addres;

    let gitf = document.getElementById('gitu').value;
    let gitt = document.getElementById('ghT');
    gitt.innerHTML = gitf;

    
   document.getElementById('fbT').innerHTML = document.getElementById('fb').value;
   

    let instaf= document.getElementById('insta').value;
    let instat= document.getElementById('inT');
    instat.innerHTML=instaf;

    let linf = document.getElementById('lin').value;
    let linkt= document.getElementById('lnkT');
    linkt.innerHTML=linf;

    let careerob = document.getElementById('cob').value;
    let careerT =document.getElementById('cobT');
    careerT.innerHTML = careerob;

    // professional 

    let acedmic = document.querySelectorAll('#accb textarea');
     let str ="";

     for(let e of acedmic)
     {
        str = str + `<li> ${e.value} </li>`;
     }
     document.getElementById('AcT').innerHTML= str;


    //  work experience
     let workexob=document.querySelectorAll('#wecb textarea');
     let str1 ="";
     for(let e of workexob){
        str1= str1+`<li> ${e.value} </li>`;
     }
     document.getElementById('weT').innerHTML=str1;

    //  skills
    let skillse = document.querySelectorAll('#skiu textarea');
     let str2 =" ";

     for(let e of skillse){
        str2 = str2+`<li> ${e.value} </li>`;
     }
     document.getElementById('skiT').innerHTML=str2;

    //  extra curri
    document.getElementById('extcurriT').innerHTML = document.getElementById('extcuri').value;
     
    
    let file= document.getElementById('profile').files[0];
    let reader= new FileReader()
    reader.readAsDataURL(file);
    // set image in template

    reader.onloadend = function(){
        document.getElementById("cvimg").src=reader.result;
    }
    

     document.getElementById('cv-form').style.display='none';
     document.getElementById('cv-template').style.display='block';

}

function printCv(){
    window.print();
}

