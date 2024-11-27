function get(){
window.open('h1.html');
}
function get1(){
window.open('h2.html');
}
function nw(){
window.open('new.html');
}
function getvalue(){

    var val=document.getElementsByName("name")[0].value;
    var v1="patient details"
    var blob = new Blob(["fuck u"],{type: "text/plain;charset=utf-8"});
    saveAs(blob,"fun.txt");

    //alert(val)

     if (confirm(v1+"\n"+val)){


        //window.close();
    }



}




var g=["M","F"];
var options='';

for (var i=0;i<g.length;i++){
    options +='<option value="'+ g[i] +'"/>';


    }
document.getElementById('gen').innerHTML = options;

var gd=document.getElementById('age');
gd.addEventListener("click",function(){
    var date=new Date();
    var year= date.getFullYear();

    var year1=document.getElementById('date').value;
    var ten=year1.split("-");
    var my=ten[0]
    var year2=parseInt(year,10)-parseInt(my,10);
//console.log(year2)
    var ye=year2.toString();
    document.getElementById('age').value=ye;
    //console.log(ye)
});


