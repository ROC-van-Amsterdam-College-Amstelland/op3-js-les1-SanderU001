var stop = "rood";
var maybe = "oranje";
var go = "groen";

var roodLichtStaatAan = false;
var oranjeLichtStaatAan = false;
var groenLichtStaatAan = false;
var roodLichtStaatAan1 = false;
var oranjeLichtStaatAan1 = false;
var groenLichtStaatAan1 = false;

window.onload = function(){
    document.getElementById("left-light-top").innerHTML = stop;
    document.getElementById("left-light-middle").innerHTML = maybe;
    document.getElementById("left-light-bottom").innerHTML = go;

    document.getElementById("right-light-top1").innerHTML = stop;
    document.getElementById("right-light-middle1").innerHTML = maybe;
    document.getElementById("right-light-bottom1").innerHTML = go;

    //JOUW CODE HIER
}

function toggleRoodLicht(){
    if(roodLichtStaatAan == false){
        document.getElementById("left-light-top").style.backgroundColor = "red";
        roodLichtStaatAan = true;
    }
    else{
        document.getElementById("left-light-top").style.backgroundColor = "gray";
        roodLichtStaatAan = false;
    }
}

    function toggleRoodLicht1(){
        if(roodLichtStaatAan1 == false){
            document.getElementById("right-light-top1").style.backgroundColor = "red";
            roodLichtStaatAan1 = true;
        }
        else{
            document.getElementById("right-light-top1").style.backgroundColor = "gray";
            roodLichtStaatAan1 = false;
        }
    }

function toggleOranjeLicht(){
    if(oranjeLichtStaatAan == false){
        document.getElementById("left-light-middle").style.backgroundColor = "orange";
        oranjeLichtStaatAan = true;
    }
    else{
        document.getElementById("left-light-middle").style.backgroundColor = "gray";
        oranjeLichtStaatAan = false;
    }
}

function toggleOranjeLicht1(){
    if(oranjeLichtStaatAan == false){
        document.getElementById("right-light-middle1").style.backgroundColor = "orange";
        oranjeLichtStaatAan = true;
    }
    else{
        document.getElementById("right-light-middle1").style.backgroundColor = "gray";
        oranjeLichtStaatAan = false;
    }
}

function toggleGroenLicht(){
    if(groenLichtStaatAan == false){
        document.getElementById("left-light-bottom").style.backgroundColor = "green";
        groenLichtStaatAan = true;
    }
    else{
        document.getElementById("left-light-bottom").style.backgroundColor = "gray";
        groenLichtStaatAan = false;
    }
}

function toggleGroenLicht1(){
    if(groenLichtStaatAan == false){
        document.getElementById("right-light-bottom1").style.backgroundColor = "green";
        groenLichtStaatAan = true;
    }
    else{
        document.getElementById("right-light-bottom1").style.backgroundColor = "gray";
        groenLichtStaatAan = false;
    }
}
