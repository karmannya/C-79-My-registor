list=[];
function submit(){
    var name1= document.getElementById("s1").value;
    var name2= document.getElementById("s2").value;
    var name3= document.getElementById("s3").value;
    var name4= document.getElementById("s4").value;

     list.push(name1);
     list.push(name2);
     list.push(name3);
     list.push(name4);

     console.log(list);

     document.getElementById("displayname").innerHTML=list;
     document.getElementById("buttonsubmit").style.display="none";
     document.getElementById("buttonsort").style.display="inline-block";
}

function sort(){
list.sort();
console.log(list);
document.getElementById("diplayname").innerHTML=list;
}