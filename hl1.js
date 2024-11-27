
var hh=["achin","ruhi","neha"];
var options='';

for (var i=0;i<hh.length;i++){
    options +='<option value="'+ hh[i] +'"/>';

    }
document.getElementById('an').innerHTML = options;
function nw(){
    var hj=document.getElementById('sa').value;
    var list=[];
    list.push(hj);
    console.log(list);

}


//var he=document.getElementById('an').value;
//list.push(he);












/*var result = document.querySelector('.output');
var hh=["achin","ruhi","neha"]
function autoComplete(hh,Input){
    return hh.filter(e =>e.toLowerCase().includes(Input.toLowerCase()));
}

//var h=document.getElementById("sa").value;


function getvalue(val){
    if(!val){
        result.innerHTML='';
        return
    }
    var data= autoComplete(hh,val);

    var res = '<ul>';
    data.forEach(e=>{
        res += '<li>'+e+'</li>';
    })
    res +='</ul>';
    result.innerHtml =res;

}

//var hh=["achin","ruhi","neha"];
//if (h in hh){
 //   document.body.innerHTML=<datalist id="sa-list">
   //     <option>achin</option>
    //</datalist>
    //alert('hell');
//}*/